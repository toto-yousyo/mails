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
              src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/241119stepmail/Step1st_FV.jpg"
              width="350"
              className="w-full mb-3"
              alt="働く食物繊維モロヘイヤ１００％あおつぶ"
            />
            <Section className="mb-5 pl-2 pr-2">
              <Heading className="text-center text-green-700 text-base">初めまして、あおつぶです。</Heading>
              <Text>〇〇さま</Text>
              <Text>この度は『あおつぶ』をご購入いただきまして、誠にありがとうございます。</Text>
              <Text>あおつぶは、「大切な人がずっと健康で、元気でいますように」という想いを叶えるために生まれました。</Text>
              <Text>お客さまの健康生活の切り札になればと思っております。</Text>
            </Section>
            <Section className="mb-5">
              <Img
                src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/241119stepmail/Step1st_2.png"
                width="350"
                className="w-full"
                alt="秘密は栄養価と食物繊維"
              />
              <Img
                src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/241119stepmail/Step1st_3.png"
                width="350"
                className="w-full"
                alt="モロヘイヤの栄養価は他の野菜を圧倒するスーパーフード"
              />
              <Img
                src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/241119stepmail/Step1st_4.png"
                width="350"
                className="w-full"
                alt="野菜の中でもトップクラスの食物繊維量。水溶性と不溶性、2つの食物繊維をバランスよく含みます"
              />
              <Img
                src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/241119stepmail/Step1st_5.jpg"
                width="350"
                className="w-full"
                alt="あおつぶの優れた食物繊維が認められて、食物繊維大賞を受賞しました。"
              />
              <Text className="mb-3 text-center text-[#707070] font-semibold leading-7 tracking-widest">あおつぶを続けて実感いただけるよう<br />限定特典をご用意いたしました！</Text>
              <Img
                src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/241119stepmail/Step1st_6.png"
                width="350"
                className="w-full mb-2"
                alt="あおつぶ 定期コースのご注文で定期割引10%OFF + あおつぶ140粒(1週間分)プレゼント！10％OFF 通常価格 ¥5,616 が¥5,054"
              />
              <Img
                src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/241119stepmail/Step1st_7.png"
                width="350"
                className="w-full"
                alt="あおつぶ14包140粒プレゼント!"
              />
              <div className="w-auto mx-4 px-9 py-4 my-8 bg-[#176830] rounded-3xl shadow text-center cursor-pointer"><a className="no-underline text-white text-base" href="https://aotsubu.co.jp/lp?u=9324">詳しくはこちら</a></div>

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

