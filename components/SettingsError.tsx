import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { FC, useEffect } from "react"

import { PageErrorLayout } from "./PageErrorLayout"

type Props = {
  retryable?: boolean
}

export const SettingsError: FC<Props> = ({ retryable }) => {
  const router = useRouter()
  const { t } = useTranslation()

  useEffect(() => {
    if (!retryable) {
      router.push("/404")
    }
  }, [retryable])

  return retryable ? (
    <PageErrorLayout
      statusCode={t("general.retryableErrorCode")}
      message={t("general.retryableErrorDescription")}
    />
  ) : null
}
