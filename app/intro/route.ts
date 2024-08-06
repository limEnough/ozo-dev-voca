import { NextResponse } from 'next/server'
 
// 해당 경로로 GET 요청 시 대응가능
export async function GET(req: Request, { params }: {params: {id: string}}) {	
  // 두번째 인자인 context에서 params 객체에 접근하여 동적 세그먼트에 접근할 수 있다.
  console.log(params);

  const res = await fetch(`data.json`, {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json();

  return NextResponse.json(data)
}

// 해당 경로로 POST 요청 시 대응가능
export async function POST() {	
  return NextResponse.json({ name: 'Test Kim' })
}