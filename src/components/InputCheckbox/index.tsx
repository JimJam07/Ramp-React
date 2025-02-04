import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"
// Bug 2 is fixed by adding a onclick attribute to the label
export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)
  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        onClick={() => onChange(!checked)}
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
    </div>
  )
}
