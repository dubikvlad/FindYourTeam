// import { memo, useState, FC } from 'react'

// import classes from './Input.module.scss'
// import { IInputProps } from './types'

// export const InputComponent: FC<IInputProps> = memo(
//   ({
//     name,
//     type,
//     className = null,
//     required = null,
//     watch = null,
//     error = null,
//     pattern = null,
//     register,
//     setValue,
//     placeholder,
//     defaultValue = null,
//     isSearch = false,
//     maxLength = null,
//   }) => {
//     const [passVisibility, setPassVisibility] = useState(false)

//     const clearInputField = () => {
//       setValue(name, '')
//     }

//     return (
//       <>
//         <div className={classes.inputContainer}>
//           {isSearch && (
//             <span className={classes.searchIcon}>
//               <SearchIcon className={classes.search} width={24} height={24} />
//             </span>
//           )}
//           <input
//             id={name}
//             type={passVisibility ? 'text' : type}
//             className={`${classes.input} ${className} ${
//               error && classes.helpErrorBorder
//             } ${isSearch ? classes.paddingLeft : null}`}
//             {...register(name, {
//               required: required,
//               pattern: {
//                 value: pattern?.value,
//                 message: pattern?.message,
//               },
//             })}
//             placeholder={placeholder}
//             defaultValue={defaultValue}
//             maxLength={maxLength}
//           />

//           <div className={classes.iconsContainer}>
//             {watch && (
//               <span
//                 onClick={() => clearInputField()}
//                 className={`${classes.icon} ${classes.iconClearInput}`}
//               >
//                 <CrossCircleIcon />
//               </span>
//             )}

//             {type === 'password' && (
//               <span
//                 className={`${classes.icon} ${classes.iconPassword}`}
//                 onClick={() => setPassVisibility(!passVisibility)}
//               >
//                 {passVisibility ? <OpenEyeIcon /> : <CloseEyeIcon />}
//               </span>
//             )}
//           </div>
//         </div>
//         {error && <div>{error.message}</div>}
//       </>
//     )
//   },
// )
