import React, {useState} from 'react'

export default function Field({ label = '', Ico = false, type = 'text', color = '#fff'}) {
  const [active, setactive] = useState(false)
  const [value, setvalue] = useState('')
  function handleBlur(e) {
    if (value === "") {
      setactive(false)
    } else {
      setactive(true)
    }
  }
  function handleChange(e) {
    let newValue = e.target.value;
    setvalue(newValue);
  }
  return (
    <div className={'field ' + (active ? 'active' : "")} style={{background: color}}>
      <div className="field-input">
        <div className="field-input-label" style={{background: color}}>{label}</div>
        <input value={value} onChange={handleChange} onFocus={() => setactive(true)} onBlur={handleBlur} type={type} />
      </div>
      <div className="field-ico">
        <Ico />
      </div>
    </div>
  )
}
