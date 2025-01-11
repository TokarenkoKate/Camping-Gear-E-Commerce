import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { Logo } from "@/shared/ui/logo/logo";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { UiHStack } from "@/shared/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiLink } from "@/shared/ui/ui-link/ui-link";
import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { UiDivider } from "@/shared/ui/ui-divider/ui-divider";
import { SocialLink } from "@/shared/ui/social-link/social-link";
import {
  footerLinks,
  socialLinks,
  STORE_ADDRESS,
  STORE_CONTACT_NUMBER,
  STORE_CONTACT_NUMBER_HREF,
  STORE_WORKING_HOURS,
} from "../model/footer";
import cls from "./footer.m.scss";

export const Footer = () => {
  return (
    <UiBox className={cls.footer} as="footer">
      <UiBox className={cls.footerContent}>
        <UiVStack className={cls.footerColumn}>
          <Logo className={cls.footerLogo} size="lg" />
          <UiVStack>
            <UiText className={cls.footerParagraph}>{STORE_ADDRESS}</UiText>
            <UiVStack>
              <UiText>{STORE_WORKING_HOURS}</UiText>
              <UiText>
                {`TEL `}
                <UiLink to={STORE_CONTACT_NUMBER_HREF}>
                  {STORE_CONTACT_NUMBER}
                </UiLink>
              </UiText>
            </UiVStack>
          </UiVStack>
          <UiHStack className={cls.socialLinks}>
            {socialLinks.map((socialLink) => (
              <SocialLink
                to={socialLink.to}
                Svg={socialLink.Svg}
                key={socialLink.to}
              />
            ))}
          </UiHStack>
        </UiVStack>

        <UiVStack className={cls.footerColumn}>
          <UiText variant="headingSm">Online Store</UiText>
          <UiVStack className={cls.footerLinks}>
            {footerLinks.map((footerLink) => (
              <UiLink to={footerLink.to} key={footerLink.title}>
                {footerLink.title}
              </UiLink>
            ))}
          </UiVStack>
        </UiVStack>

        <UiDivider orientation="vertical" />

        <UiVStack className={cls.footerColumn}>
          <UiText variant="headingSm">Customer Service</UiText>
          <UiVStack>
            <UiText className={cls.footerParagraph}>
              The staff at the stores that carry the products will be happy to
              discuss the products you are interested in online. Use video calls
              or messages.
            </UiText>
            <UiText>
              Add the account as a friend and send a message saying &quot;I
              would like to receive online service.&quot;
            </UiText>
          </UiVStack>
          <UiButton variant="outlined" className={cls.contactButton}>
            Contact Us
          </UiButton>
        </UiVStack>
      </UiBox>
    </UiBox>
  );
};
