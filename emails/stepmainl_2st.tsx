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
              src={`${baseUrl}/static/smail/241119stepmail/Step2st_FV.jpg`}
              width="350"
              className="w-full mb-3"
              alt="働く食物繊維モロヘイヤ１００％あおつぶ"
            />
            <Section className="mb-5 pl-2 pr-2">
              <Text>〇〇さま</Text>
              <Text>あおつぶをお試しになって、いかがでしょうか？</Text>
              <Text>インナーケアを続けると、おなかの調子が整って内側からの美容にも働きかけます。</Text>
              <Text>無理なく習慣にできるように、あおつぶのおすすめの飲み方をご紹介します。</Text>
            </Section>
            <Section className="mb-5">
              <Img
                src={`${baseUrl}/static/smail/241119stepmail/Step2st_2.png`}
                width="350"
                className="w-full"
                alt="あおつぶスタッフおすすめの飲み方"
              />
              <Img
                src={`${baseUrl}/static/smail/241119stepmail/Step2st_3.png`}
                width="350"
                className="w-full"
                alt="1日に10〜30粒たっぷりの水でお飲みください。いつ飲んでもOKです"
              />
              <Img
                src={`${baseUrl}/static/smail/241119stepmail/Step2st_4.png`}
                width="350"
                className="w-full"
                alt="お客様の声：モロヘイヤを飲んで毎日スッキリ、毎日ご機嫌です。"
              />
              <Text className="pl-2 pr-2">モロヘイヤ100％でできているあおつぶは、飲むというより、野菜を食べる感覚です。</Text>
              <Text className="pl-2 pr-2">栄養豊富なモロヘイヤ100％のあおつぶでインナーケアを続けませんか。</Text>
              <Img
                src={`${baseUrl}/static/smail/241119stepmail/ArrowTExt.png`}
                width="350"
                className="w-full"
                alt="ここまで読んでいただいたあなたに、特別なプレンゼント"
              />
              <Text className="mb-3 text-center text-[#707070] font-semibold leading-7 tracking-widest">あおつぶを続けて実感いただけるよう<br />限定特典をご用意いたしました！</Text>
              <Img
                src={`${baseUrl}/static/smail/241119stepmail/Step2st_5.png`}
                width="350"
                className="w-full mb-2"
                alt="あおつぶ 定期コースのご注文で定期割引10%OFF + あおつぶ140粒(1週間分)プレゼント！10％OFF 通常価格 ¥5,616 が¥5,054"
              />
              <Img
                src={`${baseUrl}/static/smail/241119stepmail/Step2st_6.png`}
                width="350"
                className="w-full"
                alt="あおつぶ14包140粒プレゼント!"
              />
              <div className="w-auto mx-4 px-9 py-4 my-8 bg-[#176830] rounded-3xl shadow text-center cursor-pointer"><a className="no-underline text-white text-base" href="https://aotsubu.co.jp/lp?u=9317">詳しくはこちら</a></div>
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

