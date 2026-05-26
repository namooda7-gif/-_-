import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보처리방침 | 라올실내건축',
  description: '라올실내건축(LAOL)의 개인정보 수집·이용·보관에 관한 처리방침입니다.',
};

function Article({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-foreground font-bold text-base md:text-lg">{title}</h2>
      <div className="space-y-2 text-text-secondary text-sm leading-relaxed break-keep">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="pt-24 md:pt-48 pb-24 px-4 md:px-8 max-w-[900px] mx-auto min-h-screen">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
        개인정보처리방침
      </h1>
      <p className="text-text-tertiary text-sm mb-16 font-light">시행일: 2026년 5월 27일</p>

      <div className="space-y-12">
        <p className="text-text-secondary text-sm leading-relaxed break-keep">
          라올실내건축(이하 회사라 합니다)은 정보주체의 개인정보를 중요하게 생각하며,
          「개인정보 보호법」 등 관련 법령을 준수합니다. 본 개인정보처리방침은 회사가 운영하는
          웹사이트(laol.kr)에서 이용자의 개인정보가 어떻게 수집·이용·보관·파기되는지를 안내합니다.
        </p>

        <Article title="제1조 (수집하는 개인정보 항목 및 방법)">
          <p>회사는 홈페이지 문의하기를 통해 아래와 같은 최소한의 개인정보를 수집합니다.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>필수 항목: 성명, 휴대전화번호, 이메일 주소, 문의 내용</li>
            <li>수집 방법: 홈페이지 문의 양식 입력</li>
          </ul>
        </Article>

        <Article title="제2조 (개인정보의 수집 및 이용 목적)">
          <p>수집한 개인정보는 다음의 목적으로만 이용됩니다.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>문의·상담 접수 및 응대</li>
            <li>견적 안내 및 시공 관련 연락</li>
            <li>서비스 안내 및 사후관리</li>
          </ul>
        </Article>

        <Article title="제3조 (개인정보의 보유 및 이용 기간)">
          <p>
            회사는 개인정보의 수집·이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
            단, 관계 법령에 따라 보존할 필요가 있는 경우에는 해당 기간 동안 보관합니다.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>문의 내용: 처리 완료 후 3년간 보관 후 파기</li>
            <li>정보주체가 삭제를 요청하는 경우: 요청 즉시 파기</li>
          </ul>
        </Article>

        <Article title="제4조 (개인정보의 제3자 제공)">
          <p>
            회사는 정보주체의 동의 없이 개인정보를 외부에 제공하지 않습니다.
            다만 법령에 특별한 규정이 있거나 수사기관의 적법한 요청이 있는 경우는 예외로 합니다.
          </p>
        </Article>

        <Article title="제5조 (개인정보 처리의 위탁)">
          <p>회사는 원활한 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 위탁하고 있습니다.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>EmailJS: 문의 양식 데이터의 이메일 전송 처리</li>
            <li>Cloudflare: 웹사이트 호스팅 및 인프라 운영</li>
          </ul>
        </Article>

        <Article title="제6조 (정보주체의 권리·의무 및 행사 방법)">
          <p>
            정보주체는 언제든지 자신의 개인정보에 대한 열람, 정정·삭제, 처리정지를 요구할 수 있습니다.
            관련 요청은 아래 개인정보 보호책임자의 이메일 또는 전화로 하실 수 있으며, 회사는 지체 없이 조치합니다.
          </p>
        </Article>

        <Article title="제7조 (개인정보의 파기 절차 및 방법)">
          <ul className="list-disc pl-5 space-y-1">
            <li>전자적 파일 형태의 정보: 복구가 불가능한 방법으로 영구 삭제</li>
            <li>종이 문서 형태의 정보: 분쇄하거나 소각하여 파기</li>
          </ul>
        </Article>

        <Article title="제8조 (개인정보의 안전성 확보 조치)">
          <p>
            회사는 개인정보 보호를 위해 접근 권한 관리, 전송 구간 암호화(HTTPS) 적용 등
            합리적인 수준의 기술적·관리적 보호 조치를 시행합니다.
          </p>
        </Article>

        <Article title="제9조 (쿠키 등 자동 수집 장치의 운영)">
          <p>
            회사는 서비스 제공을 위해 최소한의 쿠키 또는 브라우저 저장소를 사용할 수 있습니다.
            이용자는 브라우저 설정을 통해 이를 거부할 수 있으나, 이 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
          </p>
        </Article>

        <Article title="제10조 (개인정보 보호책임자)">
          <ul className="list-disc pl-5 space-y-1">
            <li>성명: 지은혜 (대표)</li>
            <li>이메일: raolarch@gmail.com</li>
            <li>전화: 010-5914-0508</li>
          </ul>
        </Article>

        <Article title="제11조 (개인정보처리방침의 변경)">
          <p>
            본 방침의 내용 추가, 삭제 및 수정이 있을 경우 시행 전 홈페이지를 통해 공지합니다.
          </p>
        </Article>

        <div className="pt-8 border-t border-white/10 text-text-tertiary text-xs leading-relaxed space-y-1">
          <p>부칙: 본 개인정보처리방침은 2026년 5월 27일부터 시행됩니다.</p>
          <p>라올실내건축 | 대표: 지은혜 | 사업자등록번호: 211-33-02983</p>
          <p>경기도 남양주시 별내중앙로 30, 2층 204호 | raolarch@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
