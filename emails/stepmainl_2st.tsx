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

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function StepMail1st() {
return (
  <Html>
    <Head />
    <Tailwind>
    <Body>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/smail/Step1st_FV.jpg`}
          width="350"
          className="w-full"
          alt="働く食物繊維モロヘイヤ１００％あおつぶ"
        />
        <Section className="mb-5">
          <Heading className="text-center text-green-700 text-lg">初めまして、あおつぶです</Heading>
          <Text>〇〇さま</Text>
          <Text>この度は『あおつぶ』をご購入いただきまして、誠にありがとうございます。</Text> 
          <Text>あおつぶは、「大切な人がずっと健康で、元気でいますように」という想いを叶えるために生まれました。</Text>
          <Text>お客さまの健康生活の切り札になればと思っております。</Text>
        </Section>
        <Section className="mb-5">
          <Img
            src={`${baseUrl}/static/smail/Step1st_2.png`}
            width="350"
            className="w-full"
            alt="秘密は栄養価と食物繊維"
          />
          <Img
            src={`${baseUrl}/static/smail/Step1st_3.png`}
            width="350"
            className="w-full"
            alt="モロヘイヤの栄養価は他の野菜を圧倒するスーパーフード"
          />
          <Img
            src={`${baseUrl}/static/smail/Step1st_4.png`}
            width="350"
            className="w-full"
            alt="野菜の中でもトップクラスの食物繊維量。水溶性と不溶性、2つの食物繊維をバランスよく含みます"
          />
          <Img
            src={`${baseUrl}/static/smail/Step1st_5.jpg`}
            width="350"
            className="w-full"
            alt="あおつぶの優れた食物繊維が認められて、食物繊維大賞を受賞しました。"
          />
        <Text>StepMail1st</Text>
        </Section>
        <Text>
          Contact{" "}
          <Link href="mailto:takata@aotsubu.co.jp">takata@aotsubu.co.jp</Link> 
        </Text>
      </Container>
    </Body>
  </Tailwind>
  </Html>
  );
}

const main = {
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

