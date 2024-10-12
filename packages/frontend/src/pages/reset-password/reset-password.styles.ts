import { css } from "@emotion/css";

import { colors } from "~shared/styles";
import { MARGINS, PADDINGS, SHADOWS } from "~shared/styles/theme";

export const resetPasswordStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .reset-password-container {
    border-radius: 8px;
    border: 1px solid ${colors.primaryBorder};
    padding: ${PADDINGS.xl};
    box-shadow: ${SHADOWS.primary};
  }

  h1 {
    margin-bottom: ${MARGINS.lg};
  }

  form {
    margin-bottom: ${MARGINS.sm};
  }

  .reset-password-link {
    display: flex;
    gap: 6px;

    a {
      font-weight: bold;
      color: ${colors.primaryText};
      text-decoration: underline;
    }
  }
`;  