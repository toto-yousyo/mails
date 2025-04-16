import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Row,
  Column,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
import Footer from "../footer";
const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function StepMail1st() {
  return (
    <Html lang="ja" dir="ltr">
      <Head />
      <Tailwind>
        <Body style={body}>
          <Container style={container}>
            <Section className="">
              <Img
                src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/250414syoukai/invitation_title.jpg"
                alt="あおつぶからご案内"
                className="w-full max-w-[700px] mx-auto"
              />
            </Section>
            <Section className="mb-5 mx-base">
              <Text>
                お客さまからのご紹介により、あおつぶサンプルをお届けした方に、ご案内をお送りしています。
              </Text>
              <Text>
                飲むというよりは、野菜を食べるに近い『あおつぶ』。
                <br />
                もう、お試しいただけましたでしょうか。
              </Text>
              <Text>
                『あおつぶ』は、健康野菜の王様でもある働く食物繊維モロヘイヤ100％でつくられた野菜粒です。
              </Text>
              <Text>
                1粒にモロヘイヤの葉約2.5枚分が含まれており、1日20粒～30粒で約50～75枚のモロヘイヤの葉を手軽に摂ることができます。
                <br />
              </Text>
              </Section>

              <Section>
              <Text>
                『あおつぶ』を摂ることは、飲むというより、野菜を食べるに近い感覚です。
              </Text>
              <Text>①栄養価の高さ</Text>
              <Text>
                モロヘイヤの栄養価の高さは野菜の中でもトップクラスです。
                <br />
                たとえば、鉄分はほうれん草の約3.7倍、β-カロテンはニンジンの約1.6倍、ビタミンEはケールの約2.5倍です。
                <br />
                たった1枚のモロヘイヤの中に食物繊維やβ-カロテン、カルシウムなど、多種多様な栄養素が36種類以上も含まれています。
                <br />
              </Text>
              <Text>②葉酸も豊富 </Text>
              <Text>
                造血のビタミンといわれる「葉酸」も豊富に含んでいます。鉄やカルシウムとともに必要不可欠な栄養素であり、特に妊活中や妊娠中はさらなる摂取が推奨されています。
                <br />
                モロヘイヤには葉酸が250㎍含まれており、ケールのおよそ2倍、ほうれん草よりも高い数値を誇ります。鉄やカルシウムも一緒に摂れるので、「葉酸」を摂りたい方にはおすすめの野菜なのです。
              </Text>
              <Text>③食物繊維量も圧倒的</Text>
              <Text>
                野菜の中でもトップクラスの食物繊維量を誇ります。
                食物繊維はバナナのおよそ10.1倍も含まれています。さらに量だけでなく、免疫機能に重要な腸内環境を整えるうえで大切な「不溶性食物繊維」と「水溶性食物繊維」をバランスよく含む、貴重な野菜でもあります。
                <br />
                ※モロヘイヤ（葉酸）、ほうれん草、バナナ、ニンジン、ケールの数値は日本食品標準成分表2020年版（八訂）、モロヘイヤ（フィリピン産）は（一財）日本食品分析センター調べによる100g当たりの栄養価
              </Text>
            </Section>
            <Section>
              <Text>■あおつぶユーザーさまからのお声</Text>
              <Text>
                あおつぶを飲んで実感いただいた方からのお声をご紹介いたします。
              </Text>
              <Text>
                あおつぶを飲むとおなかも調子がよく、体調がよいです。
                <br />
                普段から野菜不足が気になっていたので、あおつぶで野菜を摂ることができ、よろこんでいます。
                <br />
                Y.M様（兵庫県）
              </Text>
              <Text>
                あおつぶを飲み始めて2ヶ月が過ぎました。
                <br />
                今では2日から3日ほどのすっきりリズムです。
                <br />
                あまり力まずにすむので大変助かっています。
                <br />
                これからも是非続けたいと思っています。
                <br />
                S.N様（京都府）
              </Text>
              <Text>
                仕事の日は弁当持参ですが、おかずは肉中心になりがちで、野菜補給でいつもあおつぶを1袋一緒にいただいています。
                <br />
                S.N様（三重県）
              </Text>
              <Text>※お客さまのお声は個人のご感想です。</Text>
              <Text>
                「飲むというよりは、野菜を食べるに近い」、続けることで変化を実感していただければうれしく思います。
              </Text>
              <Text>株式会社 青粒</Text>
            </Section>
            <Section>
              <Text>［ お知らせ ］</Text>
              <a href="https://aotsubu.co.jp/lp?u=s201" target="_blank">
                <img
                  src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/250414syoukai/product_box_pac.jpg"
                  alt="ご紹介特典"
                  className="w-full mx-auto max-w-[700px]"
                />
              </a>
            </Section>
            <Section>
              <Text>
                毎日の健康維持にあおつぶをお役立ていただけますとうれしいです。
              </Text>
              <Text>最後までお読みいただきありがとうございます。</Text>
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
