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
              src={`${baseUrl}/static/smail/241119stepmail/Step3st_FV.jpg`}
              width="350"
              className="w-full"
              alt="働く食物繊維モロヘイヤ１００％あおつぶ"
            />
            <Section className="mb-5">
              <Heading className="text-center text-green-700 text-lg">こんにちは、あおつぶです</Heading>
              <Text>〇〇さま</Text>
              <Text>あおつぶ生活を始めていかがでしょうか？</Text>
              <Text>あおつぶはお薬ではなく、モロヘイヤ100％の野菜粒です</Text>
              <Text>すぐに大きな変化がなくてもたっぷりの食物繊維がおなかの環境を整えて、ゆっくりと体の調子をサポートします</Text>
            </Section>
            <Section className="mb-5">
              <Img
                src={`${baseUrl}/static/smail/241119stepmail/Step3st_2.png`}
                width="350"
                className="w-full"
                alt="あおつぶスタッフおすすめの飲み方"
              />
              <Img
                src={`${baseUrl}/static/smail/241119stepmail/Step3st_3.png`}
                width="350"
                className="w-full"
                alt="1日に10〜30粒たっぷりの水でお飲みください。いつ飲んでもOKです"
              />
              <Text>いかがでしたでしょうか。ぜひ、あおつぶを飲まれる時のご参考にしていただけますと幸いです。</Text>
              <Img
                src={`${baseUrl}/static/smail/241119stepmail/ArrowTExt.png`}
                width="350"
                className="w-full"
                alt="ここまで読んでいただいたあなたに、特別なプレンゼント"
              />
              <Text className="mb-3 text-center text-[#707070] text-base font-semibold leading-7 tracking-widest">あおつぶを続けて実感いただけるよう<br />限定特典をご用意いたしました！</Text>
              <Img
                src={`${baseUrl}/static/smail/241119stepmail/Step3st_4.png`}
                width="350"
                className="w-full mb-2"
                alt="あおつぶ 定期コースのご注文で定期割引10%OFF + あおつぶ140粒(1週間分)プレゼント！10％OFF 通常価格 ¥5,616 が¥5,054"
              />
              <Img
                src={`${baseUrl}/static/smail/241119stepmail/Step3st_5.png`}
                width="350"
                className="w-full mb-2"
                alt="あおつぶ 定期コースのご注文で定期割引10%OFF + あおつぶ140粒(1週間分)プレゼント！10％OFF 通常価格 ¥5,616 が¥5,054"
              />
              <div className="w-auto mx-4 px-9 py-4 my-8 bg-[#176830] rounded-3xl shadow text-center cursor-pointer"><a className="no-underline text-white text-xl" href="https://aotsubu.co.jp/lp?u=9318">詳しくはこちら</a></div>

            </Section>
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

const body = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0 48px",
  marginBottom: "64px",
};

