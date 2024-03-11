import "./assets/scss/style.scss";
import StripeLink from "./assets/js/stripe-link";

new StripeLink(".has-stripe, .button-slide");
new StripeLink(".button-fancy-slide", {
  copyContent: true,
});

new StripeLink(".fancy-border-button", {
  contentCallback: () => {
    return `
    <span>
      <span></span>
    </span>
    <span>
      <span></span>
    </span>
    `;
  },
});
