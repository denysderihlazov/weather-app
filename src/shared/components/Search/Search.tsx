import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import cn from 'classnames';
import { Input, Button } from "../";
import { useContext, useState } from "react";
import GlassIcon from './glass.svg';
import { Context } from "../../context/Context.js";


export const Search = ({ className, ...props }: SearchProps): JSX.Element => {

    const [inputValue, setInputValue] = useState<string>("");
    const [context, setContext] = useContext(Context);
    
    const handleOnClick = () => {
        console.log(inputValue)
        setContext(inputValue)//setContext((currentArray) => [...currentArray, inputValue])
    }

    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }
    console.log(context)
    return (
        <div className={cn(className, styles.search)} {...props} >
            <Button
                appearance="ghost"
                className={styles.button}
                onClick={() => setContext(inputValue)}
            >
                <GlassIcon className={cn(className, styles.icon)}  />
            </Button>
            <Input
                className={styles.input}
                placeholder="Search location here"
                value={inputValue}
                onChange={handleOnChange}

            />
        </div >
    )
};

