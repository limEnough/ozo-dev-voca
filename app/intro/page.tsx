export default function DeshboardPage() {
  return (
    <main className="intro-page">
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-6 sm:py-12">
        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md">
            {/* TODO: 로고추가 */}
            {/* <img src="/img/logo.svg" className="h-6" alt="Tailwind Play" /> */}
            <div className="divide-y divide-gray-300/50">
              <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                <p>주니어 개발자를 위한 영단어 IT영단어 앱</p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="11" />
                      <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                    </svg>
                    <p className="ml-4">
                      의미도 모른 채 외워서 작성했었던
                      <code className="text-sm font-bold text-gray-900"> @Css</code>
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="11" />
                      <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                    </svg>
                    <p className="ml-4">
                      ChatGPT에게 생각을 묻곤 했던
                      <code className="text-sm font-bold text-gray-900"> @Function Name</code>
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="11" />
                      <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                    </svg>
                    <p className="ml-4">뭐라는걸까 그저 google에 복붙했던
                      <code className="text-sm font-bold text-gray-900"> @Error Code</code>
                    </p>
                  </li>
                </ul>
                <p>
                  이제는 더이상 까막눈으로 개발하고 싶지 않은, <br />
                  주니어 개발자들을 위한 IT영단어 앱
                </p>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p className="text-gray-900">내일은 나도 IT영어 천재? 어렵지 않습니다.</p>
                <p>
                  <a href="/" className="text-sky-500 hover:text-sky-600">GET START &rarr;</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>  
  );
}
