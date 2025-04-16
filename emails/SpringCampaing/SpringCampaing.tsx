import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
import Footer from '../footer'
const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function StepMail1st() {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body style={body}>
          <Container style={container}>
            <Section className="w-full h-[60px] pl-base py-sm bg-gray-100">
              <Img src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/entry/logo_small.png" width="180" />
            </Section>
            <a href="https://aotsubu.co.jp/shop/pages/2503cam">
              <Img
                src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/entry/2503campaing.png"
                width="350"
                className="w-full"
                alt="送料無料キャンペーン"
              />
            </a>
            <Section className="text-lg text-green-800 font-bold text-center">
              新生活を応援!  送料無料キャンペーン開催中
            </Section>
            <Section className="mb-5 pl-2 pr-2">
              <Text>こんにちは、あおつぶです。</Text>
              <Text>春は始まりの季節。新生活を始められるご家族に「あおつぶ」を贈りませんか。</Text>
              <Text>本日より週末3日間限定で、あおつぶ商品が送料無料になるキャンペーンを開催いたします。</Text>
              <Text>5,000円（税込・割引前）以上ご購入で、送料・お支払い手数料無料となります。</Text>
              <Text>期間中は1点からでもご利用いただけます。全国どこでも送料がかかりません。</Text>
              <Text>ご自身用としてもご購入いただけますので、気になる商品をこの機会にぜひお試しください。</Text>
              <Text>特典は、下記キャンペーンページにお進みいただき、専用WEBページからのご注文で適用となります。</Text>
            </Section>
            <Section>
              <a href="https://aotsubu.co.jp/shop/pages/2503cam">
                <Img src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/entry/2503campaing_button.png" width="240" className="mx-auto mb-9" alt="送料無料キャンペーン" />
              </a>
            </Section>
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

const body = {
  // backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
};
