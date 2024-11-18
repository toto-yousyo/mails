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
        <p className="text-[#707070] text-xs font-medium leading-none tracking-wide">
          このメールは、システムから自動的に配信している送信専用メールですので、ご返信・お問合せは受付けいたしかねます。<br />ご連絡は下記お問い合わせフォームよりお願いいたします。<br /><br />お問い合わせは<a href="">こちら</a><br />

        </p>
        <p className="text-[#707070] text-xs font-medium leading-none tracking-wide"><br />配信停止をご希望の方はマイページのお客さま情報変更画面で「メールマガジンを受信する」のチェックを外してください<br /><br />お客さまの個人情報は、プライバシーポリシーに基づき厳重に管理いたします。<br />プライバシーポリシーは<a href="">こちら</a><br /><br /></p>

        <p className="text-[#707070] text-xs font-medium leading-none tracking-wide">あおつぶ<br />
          <br />株式会社　青 粒<br />〒651-1312 兵庫県神戸市北区有野町有野3406-1<br />TEL  0120-831-831<br />受付: 平日/9:00～17:30　土・日・祝・年末年始休み<br />
        </p>

        <p className="text-black text-xs font-medium leading-tight tracking-wider">本メールとの行き違いで、既に当キャンペーンをご利用されている場合はご容赦ください。<br /><br />最後までお読みいただきありがとうございました<br />ご不明な点などございましたらお気軽にご相談ください。
        </p>
      </Text>
      <Img
        src={`${baseUrl}/static/smail/logo_mail.png`}
        width="250"
        className="w-full text-center"
        alt="あおつぶ"
      />
    </Tailwind>
  )
}


