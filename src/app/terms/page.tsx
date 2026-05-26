import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이용약관 | 라올실내건축',
  description: '라올실내건축(LAOL) 웹사이트 이용약관입니다.',
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

export default function TermsPage() {
  return (
    <div className="pt-24 md:pt-48 pb-24 px-4 md:px-8 max-w-[900px] mx-auto min-h-screen">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
        이용약관
      </h1>
      <p className="text-text-tertiary text-sm mb-16 font-light">시행일: 2026년 5월 27일</p>

      <div className="space-y-12">
        <Article title="제1조 (목적)">
          <p>
            본 약관은 라올실내건축(이하 회사라 합니다)이 운영하는 웹사이트(laol.kr, 이하 사이트라 합니다)에서
            제공하는 정보 및 서비스의 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </Article>

        <Article title="제2조 (정의)">
          <ul className="list-disc pl-5 space-y-1">
            <li>사이트: 회사가 인테리어·실내건축 정보 및 문의 서비스를 제공하기 위해 운영하는 웹사이트를 말합니다.</li>
            <li>이용자: 사이트에 접속하여 본 약관에 따라 사이트가 제공하는 서비스를 이용하는 자를 말합니다.</li>
          </ul>
        </Article>

        <Article title="제3조 (약관의 효력 및 변경)">
          <p>
            본 약관은 사이트에 게시함으로써 효력이 발생합니다. 회사는 관련 법령을 위배하지 않는 범위에서
            약관을 변경할 수 있으며, 변경 시 적용일자 및 변경 사유를 명시하여 사이트에 공지합니다.
          </p>
        </Article>

        <Article title="제4조 (서비스의 제공)">
          <p>회사는 사이트를 통해 다음의 서비스를 제공합니다.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>회사 소개 및 시공 사례, 디자인 정보의 제공</li>
            <li>온라인 문의 및 상담 접수</li>
            <li>기타 회사가 정하는 정보 제공 서비스</li>
          </ul>
          <p>사이트가 제공하는 정보는 일반적인 안내를 위한 것이며, 구체적인 시공·계약 조건은 별도의 상담 및 계약을 통해 확정됩니다.</p>
        </Article>

        <Article title="제5조 (이용자의 의무)">
          <p>이용자는 서비스 이용 시 다음 행위를 하여서는 안 됩니다.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>문의 시 허위 정보를 입력하거나 타인의 정보를 도용하는 행위</li>
            <li>사이트의 운영을 방해하거나 안정성을 저해하는 행위</li>
            <li>회사 또는 제3자의 권리를 침해하는 행위</li>
          </ul>
        </Article>

        <Article title="제6조 (지식재산권)">
          <p>
            사이트에 게시된 모든 콘텐츠(텍스트, 이미지, 시공 사진, 디자인, 로고 등)에 대한 저작권 및 지식재산권은
            회사에 귀속됩니다. 이용자는 회사의 사전 서면 동의 없이 이를 복제, 배포, 전송, 가공하거나 상업적으로
            이용할 수 없습니다.
          </p>
        </Article>

        <Article title="제7조 (책임의 제한 및 면책)">
          <p>
            회사는 사이트에 게시된 정보의 정확성과 최신성을 유지하기 위해 노력하나, 정보의 활용으로 인해 발생한
            결과에 대해 별도의 계약이 체결되지 않은 한 책임을 지지 않습니다. 또한 천재지변, 통신 장애 등 회사의
            합리적인 통제를 벗어난 사유로 인한 서비스 중단에 대해서는 책임이 면제됩니다.
          </p>
        </Article>

        <Article title="제8조 (문의 내용의 관리)">
          <p>
            회사는 접수된 문의 중 욕설, 광고, 불법적 내용 등 부적절하다고 판단되는 경우 해당 내용을
            처리하지 않거나 삭제할 수 있습니다.
          </p>
        </Article>

        <Article title="제9조 (준거법 및 관할법원)">
          <p>
            본 약관은 대한민국 법령에 따라 해석되며, 회사와 이용자 간 분쟁이 발생한 경우 관련 법령이 정한
            절차에 따른 관할 법원을 제1심 관할 법원으로 합니다.
          </p>
        </Article>

        <Article title="제10조 (문의처)">
          <ul className="list-disc pl-5 space-y-1">
            <li>라올실내건축 (대표: 지은혜)</li>
            <li>이메일: raolarch@gmail.com</li>
            <li>전화: 010-4782-8934</li>
          </ul>
        </Article>

        <div className="pt-8 border-t border-white/10 text-text-tertiary text-xs leading-relaxed space-y-1">
          <p>부칙: 본 약관은 2026년 5월 27일부터 시행됩니다.</p>
          <p>라올실내건축 | 대표: 지은혜 | 사업자등록번호: 211-33-02983</p>
          <p>경기도 남양주시 별내중앙로 30, 2층 204호 | raolarch@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
