# OnRoom 프로젝트 미션 컨트롤 센터 (라올실내건축_신규)

## 📌 현재 운영 상태 & 배포 환경
- **프로젝트 명**: 라올실내건축 신규 홈페이지 (laol-homepage)
- **배포 플랫폼**: Cloudflare Pages (`laol-homepage.pages.dev`)
- **실제 서비스 도메인**: `laol.kr` (가비아 구매)
- **현재 서비스 상태**: 🟢 **정상 서비스 운영 중 (2026.08.23 복구 완료)**

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
- [x] **정상 운영 모드 전환 (2026-08-23)**:
  - **점검 스위치 비활성화**: [src/app/layout.tsx](file:///c:/Users/namoo/Documents/라올실내건축_신규/src/app/layout.tsx) 파일의 `MAINTENANCE_MODE = false`로 변경
  - **로컬 빌드 검증**: `npm run build` 결과 에러 없이 최종 정상 빌드 완료 확인

## 🛠️ 최근 변경 파일 목록
- **[MODIFY] 최상위 레이아웃**: [src/app/layout.tsx](file:///c:/Users/namoo/Documents/라올실내건축_신규/src/app/layout.tsx) (`MAINTENANCE_MODE = false;` 설정하여 점검 배너 제거 및 실제 메인 페이지 복원)
- **[REFERENCE] 점검 UI 컴포넌트**: [src/components/Maintenance.tsx](file:///c:/Users/namoo/Documents/라올실내건축_신규/src/components/Maintenance.tsx) (추후 필요시 재사용 가능한 점검 UI 코드 보존)

## 🚀 임시 점검 모드 전환 방법 (추후 재점검 필요 시)
1. **코드 수정**: [src/app/layout.tsx](file:///c:/Users/namoo/Documents/라올실내건축_신규/src/app/layout.tsx) 파일의 `MAINTENANCE_MODE` 변수를 아래와 같이 변경합니다.
   ```typescript
   // 점검 상태로 전환 시 (true)
   const MAINTENANCE_MODE = true;
   
   // 정상 운영 시 (현재 상태)
   const MAINTENANCE_MODE = false;
   ```
2. **배포**: 수정한 코드를 Git에 커밋 및 푸시하면 Cloudflare Pages 빌드를 통해 자동으로 사이트 상태가 업데이트됩니다.
