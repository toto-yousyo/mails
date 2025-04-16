import {
  Img,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function Footer() {
  return (
    <Tailwind>
      <Text>
        <p className="text-[#707070] text-xs font-medium  tracking-wide pl-2 pr-2">
          このメールは、システムから自動的に配信している送信専用メールですので、ご返信・お問合せは受付けいたしかねます。<br />ご連絡は下記お問い合わせフォームよりお願いいたします。<br /><br />【お問い合わせはこちら】<br />
          <a href="https://aotsubu.co.jp/shop/contact">https://aotsubu.co.jp/shop/contact</a>
        </p>

        <p className="text-[#707070] text-xs font-medium  tracking-wide pl-2 pr-2">
          株式会社　青 粒<br />
          <a href="https://aotsubu.co.jp">https://aotsubu.co.jp</a><br /><br />
          〒651-1312 兵庫県神戸市北区有野町有野3406-1<br />TEL  0120-831-831<br />受付: 平日/9:00～17:30<br />土・日・祝・年末年始休み<br />
        </p>

        <p className="text-[#707070] text-xs font-medium tracking-wide pl-2 pr-2">
          配信停止をご希望の方は下記URLよりマイページのお客さま情報変更画面で「メールマガジンを受信する」のチェックを外してください。
          <br />
          <a href="https://aotsubu.co.jp/shop/customer/edit">https://aotsubu.co.jp/shop/customer/edit</a>
        </p>
      </Text>
      <Img
        src="https://ec-force.s3.amazonaws.com/aotsubucojp/uploads/assets/smail/241119stepmail/logo_mail.png"
        width="350"
        className="w-1/2 mx-auto my-10"
        alt="あおつぶ"
      />
    </Tailwind>
  )
}

