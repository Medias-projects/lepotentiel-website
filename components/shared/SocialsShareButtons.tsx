import dynamic from "next/dynamic";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  EmailIcon,
  EmailShareButton,
  TelegramIcon,
  TelegramShareButton,
} from "next-share";

export default function SocialsShareButtons() {
  const url = typeof window !== "undefined" ? window.location.href : null;

  return (
    <div>
      <FacebookShareButton url={url as string}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
      <LinkedinShareButton url={url as string}>
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>
      <WhatsappShareButton url={url as string}>
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
      <TelegramShareButton url={url as string}>
        <TelegramIcon size={40} round />
      </TelegramShareButton>
      <TwitterShareButton url={url as string}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>
      <EmailShareButton
        url={url as string}
        subject={"Article du site le Potentiel"}
        body=" Bonjour, je te partage cet article à lire:"
      >
        <EmailIcon size={40} round />
      </EmailShareButton>
    </div>
  );
}
