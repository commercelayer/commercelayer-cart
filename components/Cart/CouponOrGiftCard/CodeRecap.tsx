import {
  GiftCardOrCouponCode,
  GiftCardOrCouponRemoveButton,
} from "@commercelayer/react-components"
import { CodeType } from "@commercelayer/react-components/lib/reducers/OrderReducer"
import { useTranslation } from "next-i18next"
import { FC } from "react"

const allowedCodeTypes: CodeType[] = ["coupon", "gift_card"]

export const CodeRecap: FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      {allowedCodeTypes.map((type) => (
        <GiftCardOrCouponCode key={type} type={type}>
          {({ code }) =>
            code ? (
              <div className="flex justify-between items-center text-sm mb-2 gap-3">
                <div className="select-all">{code}</div>
                <GiftCardOrCouponRemoveButton
                  type={type}
                  className="font-bold text-primary border-b leading-none border-black border-opacity-10 md: transition ease-in duration-200 hover:border-opacity-50 hover:text-primary-dark focus:outline-none"
                  label={t("general.remove")}
                />
              </div>
            ) : null
          }
        </GiftCardOrCouponCode>
      ))}
    </div>
  )
}
