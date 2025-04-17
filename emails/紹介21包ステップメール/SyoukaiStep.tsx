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
          <Container style={container} className="py-4">
            <Section>
              <Img
                src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/250414syoukai/invitation_title.jpg"
                alt="あおつぶからご案内"
                className="w-full max-w-[700px] mx-auto"
              />
            </Section>
            <Section className="mx-lg flex gap-lg py-base w-full">
              <Text className="text-base">
                お客さまからのご紹介により、あおつぶサンプルをお届けした方に、ご案内をお送りしています。
              </Text>
              <Img
                src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/250414syoukai/Bottle.jpg"
                alt="あおつぶ"
                className="w-full max-w-[500px] mx-auto"
              />
              <Text className="text-base">
                飲むというよりは、野菜を食べるに近い『あおつぶ』。
                もう、お試しいただけましたでしょうか。
              </Text>
              <Text className="text-base">
                『あおつぶ』は、健康野菜の王様でもある働く食物繊維モロヘイヤ100％でつくられた野菜粒です。
              </Text>
              <Text className="text-base">
                1粒にモロヘイヤの葉約2.5枚分が含まれており、1日20粒～30粒で約50～75枚のモロヘイヤの葉を手軽に摂ることができます。
              </Text>
              <Text className="text-base">
                『あおつぶ』を摂ることは、飲むというより、野菜を食べるに近い感覚です。
              </Text>
            </Section>

            <Section className="py-4 w-full">
              <Section className="py-1 bg-[#E6EEEA]">
                <Text className="text-center text-base text-green-800 font-semibold">
                  栄養素の高さ
                </Text>
              </Section>
              <Text className="text-base">モロヘイヤの栄養価の高さは野菜の中でもトップクラスです。</Text>
              <Text className="text-base">たとえば、鉄分はほうれん草の約3.7倍、β-カロテンはニンジンの約1.6倍、ビタミンEはケールの約2.5倍です。</Text>
              <Img
                src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/250414syoukai/Nutrition.png"
                alt="栄養価の高さのグラフ"
                className="w-full max-w-[350px] mx-auto"
                />
              <Text className="text-base">たった1枚のモロヘイヤの中に食物繊維やβ-カロテン、カルシウムなど、多種多様な栄養素が36種類以上も含まれています。</Text>
            </Section>

            <Section className="py-4 w-full">
              <Section className="py-1 bg-[#E6EEEA]">
                <Text className="text-center text-base text-green-800 font-semibold">
                  葉酸も豊富
                </Text>
              </Section>
                <Text className="text-base">造血のビタミンといわれる「葉酸」も豊富に含んでいます。</Text>
                <Text className="text-base">鉄やカルシウムとともに必要不可欠な栄養素であり、特に妊活中や妊娠中はさらなる摂取が推奨されています。</Text>
              <Img
                src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/250414syoukai/yousanGraph.png"
                alt="葉酸の量のグラフ"
                className="w-full max-w-[350px] mx-auto"
                />
              <Text className="text-base">モロヘイヤには葉酸が250㎍含まれており、ケールのおよそ2倍、ほうれん草よりも高い数値を誇ります。</Text>
              <Text className="text-base">鉄やカルシウムも一緒に摂れるので、「葉酸」を摂りたい方にはおすすめの野菜なのです。</Text>
            </Section>

            <Section className="py-4 w-full">
              <Section className="py-1 bg-[#E6EEEA]">
                <Text className="text-center text-base text-green-800 font-semibold">
                  食物繊維量も圧倒的
                </Text>
              </Section>
              <Text className="text-base">野菜の中でもトップクラスの食物繊維量を誇ります。 食物繊維はバナナのおよそ10.1倍も含まれています。</Text>
              <Text className="text-base">さらに量だけでなく、免疫機能に重要な腸内環境を整えるうえで大切な「不溶性食物繊維」と「水溶性食物繊維」をバランスよく含む、貴重な野菜でもあります。</Text>
              <Img
                src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/250414syoukai/fiberGraph.png"
                alt="食物繊維量のグラフ"
                className="w-full max-w-[350px] mx-auto"
                />
            </Section>
            <Section className="w-full pb-2 px-2 ">
              <Text className="text-xs leading-tight pl-2 -indent-2">
                ※モロヘイヤ（葉酸）、ほうれん草、バナナ、ニンジン、ケール、サツマイモ、ゴボウの数値は日本食品標準成分表2020年版（八訂）、モロヘイヤ（フィリピン産）は（一財）日本食品分析センター調べによる100g当たりの栄養価
              </Text>
            </Section>

            <Section className="bg-[#F0EDEB] w-full px-6 pb-6 rounded-md">
              <Text className="text-[#877F78] font-semibold w-full text-lg text-center">あおつぶユーザーさまからのお声</Text>
              <Text className="text-gray-800 w-full text-base">
                あおつぶを飲んで実感いただいた方からのお声をご紹介いたします。
              </Text>
              <Section className="bg-white rounded-md w-full mx-auto px-3 mb-4">
                <Text className="w-full text-base">
                  あおつぶを飲むとおなかも調子がよく、体調がよいです。
                  <br />
                  普段から野菜不足が気になっていたので、あおつぶで野菜を摂ることができ、よろこんでいます。
                  <br />
                  <span className="text-xs">
                    Y.M様（兵庫県）
                  </span>
                </Text>
              </Section>
              <Section className="bg-white rounded-md w-full mx-auto px-3 mb-4">
              <Text className="text-base">
                あおつぶを飲み始めて2ヶ月が過ぎました。
                <br />
                今では2日から3日ほどのすっきりリズムです。
                <br />
                あまり力まずにすむので大変助かっています。
                <br />
                これからも是非続けたいと思っています。
                <br />
                  <span className="text-xs">
                S.N様（京都府）
                </span>
              </Text>
              </Section>
              <Section className="bg-white rounded-md w-full mx-auto px-2">
              <Text className="text-base">
                仕事の日は弁当持参ですが、おかずは肉中心になりがちで、野菜補給でいつもあおつぶを1袋一緒にいただいています。
                <br />
              <span className="text-xs">
                S.N様（三重県）
              </span>
              </Text>
              </Section>
              <Text>※お客さまのお声は個人のご感想です。</Text>
            </Section>
            <Section className="w-full text-base px-2">
              <Text className="text-base">
                「飲むというよりは、野菜を食べるに近い」、続けることで変化を実感していただければうれしく思います。
              </Text>
              <Text className="text-right text-base">株式会社 青粒</Text>
            </Section>
            <Section className="w-full">
              <a href="https://aotsubu.co.jp/lp?u=s201" target="_blank">
                <img
                  src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/250414syoukai/product_box_pac.jpg"
                  alt="ご紹介特典"
                  className="w-full mx-auto max-w-[700px]"
                />
              </a>
            </Section>
            <Section>
              <Text className="text-base">
                毎日の健康維持にあおつぶをお役立ていただけますとうれしいです。
              </Text>
              <Text className="text-base">最後までお読みいただきありがとうございます。</Text>
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
