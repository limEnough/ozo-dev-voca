/** 
 * useEffect(페이지 뷰 로깅), useState(페이지별 피드백 양식)에 사용
 * Layout과 다른 점 : 같은 템플릿을 사용하는 라우트를 이동할 때도 새로운 인스턴스가 마운트 되고, DOM 요소가 다시 생성되며 상태가 보존되지 않음
 */
interface RootTemplateProps {
  children: React.ReactNode;
}

export default function RootTemplate({children}: RootTemplateProps) {
  return (
    <div className="root-template">
      {children}
    </div>
  );
}