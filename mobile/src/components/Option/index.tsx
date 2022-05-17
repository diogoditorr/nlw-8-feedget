import {
    View,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    Image,
    ImageProps,
} from "react-native";
import React from "react";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
    title: string;
    image: ImageProps;
}

export function Option({ title, image, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Image source={image} style={styles.image} />
            
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
