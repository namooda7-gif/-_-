# OnRoom 프로젝트 미션 컨트롤 센터 (라올실내건축_신규)

## 📌 현재 운영 상태 & 배포 환경
- **프로젝트 명**: 라올실내건축 신규 홈페이지 (laol-homepage)
- **배포 플랫폼**: Cloudflare Pages (`laol-homepage.pages.dev`)
- **실제 서비스 도메인**: `laol.kr` (가비아 구매)

## 🎯 태스크 성취도 (도메인 연결)
- [x] **Cloudflare 도메인 추가**: `laol.kr` 도메인을 Cloudflare 계정에 Free 플랜으로 추가 완료
- [x] **네임서버 변경 (가비아)**: 기존 가비아 네임서버를 삭제하고 Cloudflare 네임서버(melnicoff, ziggy)로 교체 완료
- [x] **Pages 커스텀 도메인 연결**: `laol-homepage` 프로젝트의 Custom domains에 `laol.kr` 등록 및 CNAME 활성화 버튼(Activate domain) 클릭 완료
- [x] **DNS 전파 완료**: 네임서버(ziggy/melnicoff) 및 Cloudflare IP 연결 확인 완료
- [x] **SSL 인증서 발급**: Cloudflare Universal SSL 발급 완료, `https://laol.kr` 200 OK 정상 접속
- [x] **SEO 적용**: metadataBase/canonical/OpenGraph + `sitemap.xml`·`robots.txt` 라이브 반영 (전부 200)
- [x] **Favicon/앱 아이콘**: 골드 L 모노그램 (icon.svg / apple-icon / favicon.ico / PWA 192·512) 적용

## 🔍 검색엔진 등록 (2026-05-26 완료)
- [x] **구글 Search Console**: 소유확인(HTML 파일 방식) 완료 → 사이트맵 `sitemap.xml` 제출, 상태 "성공", **22개 페이지 발견**
- [x] **네이버 서치어드바이저**: 소유확인(HTML 태그 방식, 메타태그 코드 `efc9c7c7...`) 완료 → 사이트맵 `sitemap.xml` 제출 완료
- ⚠️ **참고**: Cloudflare Pages가 `.html` 주소를 308 리다이렉트(클린 URL)함. 네이버는 파일 방식 대신 **HTML 태그(메타태그) 방식**으로 인증함. 메타태그는 `src/app/layout.tsx`의 `metadata.verification`에 위치.

## ✅ 도메인 연결 + SEO + 검색엔진 등록 모두 완료 — `https://laol.kr` 정상 서비스 중 (2026-05-26)

## 📧 문의하기(EmailJS) 템플릿 설정
- [x] **EmailJS 변수 매핑 완료**: 코드(React) 내의 input name(`from_name`, `from_phone`, `from_email`, `message`)과 EmailJS 템플릿 변수를 일치시키는 가이드 제공 완료.
- [x] **EmailJS Service 연결 오류 해결**: 끊겨 있던 Gmail 서비스 재연결 및 새 발급된 Service ID(`service_3eagpfj`)로 React 코드 업데이트 완료.

## 🚀 사장님을 위한 넥스트 마일스톤
1. **모바일/PC 최종 체감 점검**
   - `https://laol.kr` 접속 속도·렌더링을 실제 단말에서 확인 (파비콘은 브라우저 캐시 때문에 Ctrl+Shift+R 권장).
2. **SNS 공유 미리보기 확인**
   - 카카오톡·페이스북에 `https://laol.kr` 링크 붙여 OG 이미지/제목이 잘 뜨는지 확인 (안 뜨면 카카오 캐시 초기화).
3. **색인 모니터링 (며칠~몇 주 소요)**
   - 구글/네이버에서 실제 색인되는지 1~2주 뒤 Search Console·서치어드바이저에서 확인. `laol.kr` 또는 `site:laol.kr` 검색으로 노출 체크.
