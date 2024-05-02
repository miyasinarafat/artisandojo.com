import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Sheridan" invert={invert}>
            30 N Gould St Ste R
            <br />
            Sheridan, WY 82801
        </Office>
      </li>
      <li>
        <Office name="Dhaka" invert={invert}>
            44/1 Rahim Square, New Market
          <br />
            Dhaka 1205, Bangladesh
        </Office>
      </li>
    </ul>
  )
}
