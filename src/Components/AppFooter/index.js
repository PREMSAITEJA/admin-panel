import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+91 7382019954">+91 7382019954</Typography.Link>
      <Typography.Link href="https://www.shopify.com/in/legal/privacy" target={"_blank"}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.shopify.com/in/legal/terms" target={"_blank"}>
        Terms of Use
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
