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
import Footer from './footer'
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
            <Img
              src={`${baseUrl}/static/smail/241119stepmail/Step4st_FV.jpg`}
              width="350"
              className="w-full mb-3"
              alt="働く食物繊維モロヘイヤ１００％あおつぶ"
            />
            <Section className="mb-5 pl-2 pr-2">
              <Heading className="text-center text-green-700 text-base">こんにちは、あおつぶです</Heading>
              <Text>〇〇さま</Text>
              <Text>あおつぶをお飲みいただいてお体の調子はいかがでしょうか？</Text>
              <Text>今回はインナーケアが気になる方にあおつぶ特別10％OFFのご案内です。</Text>
              <Text>モロヘイヤの食物繊維、ビタミン、ミネラルが内側からアプローチします。忙しい毎日のインナーケアを手軽に♪</Text>
              <Text>あおつぶをもう少し続けてみたいそんな方のために【今回のみのご購入で10％OFF】キャンペーンをご用意いたしました。</Text>
            </Section>

            <Section>
              <Img
                src={`${baseUrl}/static/smail/241119stepmail/Step4st_FV.jpg`}
                width="350"
                className="w-full"
                alt="あおつぶ詰替用またはあおつぶパック75包 10％OFF 通常価格 ¥5,616 が¥5,054"
              />
            </Section>

            <Section className="mb-5 pl-2 pr-2">
              <div className="w-auto mx-4 py-4 my-8 bg-[#176830] rounded-3xl shadow text-center cursor-pointer"><a className="no-underline text-white text-base" href="https://aotsubu.co.jp/lp?u=321">キャンペーンはこちらから</a></div>
              <Text>※ご利用はご本人様のみ1回1個限り有効です。</Text>
              <Text>※他のキャンペーン・割引券との併用はできませんので、ご了承ください。</Text>
            </Section>

            <Section className="mb-5">
              <Img
                src={`${baseUrl}/static/smail/241119stepmail/Step4st_2.png`}
                width="350"
                className="w-full"
                alt="お客さまの声：気が付くと毎日スッキリ爽快で自分でもびっくり！なんだかツルツルとキレイになった気がします。まさに飲む美容食！"
              />
              <Text className="pl-2 pr-2">最後までお読みいただきありがとうございました。</Text>
              <Text className="pl-2 pr-2">〇〇さまの元気とキレイにお役立ていただけますと幸いです。</Text>
            </Section>

            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

const body = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
};

