# OnRoom 프로젝트 미션 컨트롤 센터 (라올실내건축_신규)

## 📌 현재 운영 상태 & 배포 환경
- **프로젝트 명**: 라올실내건축 신규 홈페이지 (laol-homepage)
- **배포 플랫폼**: Cloudflare Pages (`laol-homepage.pages.dev`)
- **실제 서비스 도메인**: `laol.kr` (가비아 구매)
- **현재 서비스 상태**: ⚠️ **임시 점검 및 서비스 일시 중단 중 (2026.08.08 ~ 2026.08.15 예정)**

## 🎯 태스크 성취도 (도메인 연결 & 점검 모드)
- [x] **Cloudflare 도메인 추가**: `laol.kr` 도메인을 Cloudflare 계정에 Free 플랜으로 추가 완료
- [x] **네임서버 변경 (가비아)**: 기존 가비아 네임서버를 삭제하고 Cloudflare 네임서버로 교체 완료
- [x] **Pages 커스텀 도메인 연결**: `laol-homepage` 프로젝트의 Custom domains에 `laol.kr` 등록 및 CNAME 활성화 완료
- [x] **SSL 인증서 발급 & SEO 적용**: `https://laol.kr` 200 OK 정상 접속, `sitemap.xml`·`robots.txt` 적용 완료
- [x] **검색엔진 등록 (2026-05-26)**: 구글 서치콘솔 및 네이버 서치어드바이저 등록 완료
- [x] **임시 점검 모드 적용 (2026-08-08)**: 
  - **프리미엄 점검 UI 개발** ([src/components/Maintenance.tsx](file:///c:/Users/namoo/Documents/라올실내건축_신규/src/components/Maintenance.tsx))
  - **정적 빌드용 분기 처리** ([src/app/layout.tsx](file:///c:/Users/namoo/Documents/라올실내건축_신규/src/app/layout.tsx))
  - **로컬 빌드 검증**: `npm run build` (정적 HTML 수출 `output: 'export'`) 문제없이 정상 성공 확인 완료

## 🛠️ 임시 점검 모드 관련 생성 및 변경 파일 목록
- **[NEW] 점검 UI 컴포넌트**: [src/components/Maintenance.tsx](file:///c:/Users/namoo/Documents/라올실내건축_신규/src/components/Maintenance.tsx) (골드 & 다크 테마 프리미엄 디자인, 카카오톡 실시간 링크 및 비상 연락처 노출)
- **[MODIFY] 최상위 레이아웃**: [src/app/layout.tsx](file:///c:/Users/namoo/Documents/라올실내건축_신규/src/app/layout.tsx) (상단 `MAINTENANCE_MODE = true;` 변수를 두어 제어)

## 🚀 복구 및 활성화 방법 (일주일 뒤 오픈 시)
1. **코드 수정**: [src/app/layout.tsx](file:///c:/Users/namoo/Documents/라올실내건축_신규/src/app/layout.tsx) 파일의 69번째 라인 근처에 있는 변수를 아래와 같이 변경합니다.
   ```typescript
   // 기존 점검 상태 (true)
   const MAINTENANCE_MODE = true;
   
   // 정상 운영으로 전환 시 (false)
   const MAINTENANCE_MODE = false;
   ```
2. **배포**: 수정한 코드를 Git에 커밋 및 푸시(`git push`)하면 Cloudflare Pages 빌드를 통해 자동으로 사이트가 정상 복원됩니다.
