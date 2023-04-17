"use client";
import React, { useState, useEffect } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

import * as S from './styles'

export const DarkMode = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mount, setMount] = useState(false);
    const currenttheme = theme === "system" ? systemTheme : theme;
    useEffect(() => setMount(true), []);
    return (
        <>
            {mount && currenttheme === "dark" ? (
                <S.Light>
                    <MdLightMode
                        onClick={() => setTheme("light")}
                    />
                </S.Light>
            ) : (
                <S.Dark>
                    <BsMoonStarsFill
                        onClick={() => setTheme("dark")}
                    />
                </S.Dark>
            )}
        </>
    );
};

