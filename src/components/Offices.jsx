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
        <Office name="Wilmington" invert={invert}>
            24A Trolley Square #1611
            <br />
            Wilmington, DE 19806-3334, USA
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
