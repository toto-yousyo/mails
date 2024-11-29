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
            <a href="https://aotsubu.co.jp/shop/pages/2024winter">
            <Img
              src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/24112833thwinter/33th_winter_2.jpg"
              width="350"
              className="w-full mb-3"
              alt="働く食物繊維モロヘイヤ１００％あおつぶ"
            />
            </a>
            <Section className="mb-5 pl-2 pr-2">
              <Text>〇〇さま</Text>
              <Text>あおつぶの藤本です。<br />
                12月に入り寒さが増してきましたね。<br />
                体が冷えるとおなかの動きにも影響をします。
              </Text>
              <Text>私は最近冷え対策に、シャワーではなく湯船につかるようにしています。<br />
                体の芯からじんわり温まります。<br />
                その後レッグウォーマ―を履いて寝ると、翌朝体がポカポカした状態で目覚めることができます。
              </Text>
              <Text>無理なく習慣にできる冷え対策で、元気に過ごしていきたいですね。</Text>
              <Text>さて、以前にお贈りしました特別クーポンの締切が12月24日（火）までとなります。</Text>
              <Text>内側からのケアで冬を健康に乗り切るために<br />
              ぜひこの機会にご利用ください♪</Text>
            </Section>
            <Section className="pl-2 pr-2">
            <Img
              src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/24112833thwinter/33th_winter_3.png"
              width="350"
              className="w-full mb-3"
              alt="5,000円（税込）以上ご購入【税込500円（税別463円）割引】さらに送料・支払い手数料無料 10,000円（税込）以上ご購入【税込1,000円（税別926円）割引】さらに送料・支払い手数料無料"
            />
            </Section>
            <Section className="pl-2 pr-2">
              <Text>
                webからご注文の方は<br />
                専用ページからご購入の場合に<br />
                特典が適用されます。<br />
              </Text>
              <Text>≪ご利用方法≫</Text>
              <Text>
                1.専用ページにアクセス<br />
                「エントリーする」のボタンをタップ。<br />
                ※「エントリーが完了しました」と表示されるまでは送料無料の特典が適用されません。<br />
                <br />
                2.「商品ラインナップ」をタップ<br />
                商品を選んでください。<br />
                <br />
                3.クーポンコードをコピー<br />
                カート内に表示されたクーポンコードをコピーし、クーポンコードの入力欄に貼付けをしてください。
              </Text>
            </Section>
            <Section className="pl-2 pr-2">
              <Text>
                ------------------------------------<br />
                購入金額<br />
                5,000円（税込）～9,999円（税込）<br />
                クーポンコード：500aw<br />
                <br />
                購入金額<br />
                10,000円（税込）以上<br />
                クーポンコード：1000aw<br />
                ------------------------------------<br />
                ※ご入力のない場合やクーポンコードに誤りがある場合は特典の適用ができませんので、必ずご確認をお願いいたします。<br />
                <br />
                【あおつぶ特別特典の専用ページはこちら】　<br />
                <a href="https://aotsubu.co.jp/shop/pages/2024winter">https://aotsubu.co.jp/shop/pages/2024winter</a>
              </Text>
            </Section>
            <Section className="pl-2 pr-2">
              <Text>
                ※ご利用はご本人様のみ1回限り有効です。<br />
                ※他のキャンペーン、割引券との併用は<br />
                できませんので、ご了承ください。<br />
                ※クーポンは1回のご注文で1つのみご利用いただけます。<br />
                ※WEBのご注文は、割引額が税別表記となりますが、税込価格(500円・1,000円)で割引適用いたします。<br />
                <br />
                本メールとの行き違いで、既にクーポンをご使用されている場合はご容赦ください。<br />
                <br />
                最後までお読みいただき<br />ありがとうございました。<br />
                <br />
                〇〇さまのご健康を心より願っております。<br />
                <br />
                株式会社 青粒<br />
                藤本
              </Text>
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

