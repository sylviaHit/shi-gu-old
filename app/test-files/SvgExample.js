import React, {Component} from 'react';
import { Animated } from 'react-native';
import Svg,{
    Circle,
    Ellipse,
    G,
    ClipPath,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

export default class SvgExample extends Component {

    constructor (props) {
        super(props);
        this.state = {
            animation: new Animated.Value(0),
            animation2: new Animated.Value(0)
        };
    }

    componentDidMount () {
        // this.infiniteAnimate();
        this.explode();
    }

    explode = () => {
        Animated.timing(this.state.animation, {
            duration: 1500,
            toValue: 50
        }).start(() => {
            // this.state.animation.setValue(0);
            Animated.timing(this.state.animation2, {
                duration: 1500,
                toValue: 50
            }).start();
            this.forceUpdate();
        });
    }

    render() {
        return (
            <Svg
                height="150"
                width="300"
            >
                <Defs>
                    <RadialGradient id="grad" cx="50" cy="50" rx="50" ry="50" fx="50" fy="50" gradientUnits="userSpaceOnUse">
                        <Stop
                            offset="0"
                            stopColor="#ff0"
                            stopOpacity="1"
                        />
                        <Stop
                            offset="1"
                            stopColor="#83a"
                            stopOpacity="1"
                        />
                    </RadialGradient>
                </Defs>
                <Circle cx="80" cy="80" r={30} fill="url(#grad)" />
            </Svg>
        );
    }
}
