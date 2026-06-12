// children => <Button>Children burası</Button>
//props=> <Button onClick={...} disabled name="x" /> <Button onClick={myFn} disabled={true} /> 
// Yani ...props, hem
// onClick
// disabled
// type
// title
// id
// aria-label
//COMPUTED PROPERTY'i araştır. x-clone da class true yapılmış ya onun adıymış bu konuyu arraştır.
import PropTypes from "prop-types";

//   export default function Button({
//   children,
//   primary,
//   secondary,
//   success,
//   warning,
//   danger,
//   outline,
//   rounded,
// }) {
//   //1st arg:: for all variations.
//   const classes = className("px-3 py-1.5 border", {
//     "border-blue-500 bg-blue-500 text-white": primary,
//     "border-gray-900 bg-gray-900 text-white": secondary,
//     "border-green-500 bg-green-500 text-white": success,
//     "border-yellow-400 bg-yellow-400 text-white": warning,
//     "border-red-500 bg-red-500 text-white": danger,
//     "rounded-full": rounded,
//     "bg-white": outline,
//     "text-blue-500": outline && primary,
//     "text-gray-900": outline && secondary,
//     "text-green-500": outline && success,
//     "text-yellow-500": outline && warning,
//     "text-red-500": outline && danger,
//   });

//   return <button className={classes}>{children}</button>;
// }

// Button.propTypes = {
//   checkVariationValue: ({ primary, secondary, success, danger, warning }) => {
//     const count =
//       Number(!!primary) +
//       Number(!!secondary) +
//       Number(!!success) +
//       Number(!!danger) +
//       Number(!!warning);
//     if (count > 1) {
//       return new Error("Only one of p, s, w , s ,d can be true");
//     }
//   },
// };

export default function Button({ tag, size, color, rounded, variant, type, props, children }) {
    return createElement(tag, {
        className: classNames('btn', {
            "btn-sm": size === small,
            "btn-lg": size === large,
            "button": type === button,
            "btn-small": size === small,
            [className]: true 
        }),
        ...props
    }, children)

}
Button.propTypes = {
    tag: PropTypes.oneOf(['a', 'button', 'input']),
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
}

Button.defaultProps = {
    size: 'normal',
    color: 'main-color',
    rounded: 'full',
    type: 'button',
}