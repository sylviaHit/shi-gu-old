
import React ,{
    Component
}from 'react';
import {ART, Animated, View} from 'react-native';
const {
    Surface,
    Group,
    Shape,
    Path,
    Transform
} = ART;
const AnimatedShape = Animated.createAnimatedComponent(Shape);
const AnimatedGroup = Animated.createAnimatedComponent(Group);

// 一颗星星的SVG代码
const STAR = 'M 0.000 10.000 L 11.756 16.180 L 9.511 3.090 L 19.021 -6.180 L 5.878 -8.090 L 0.000 -20.000 L -5.878 -8.090 L -19.021 -6.180 L -9.511 3.090 L -11.756 16.180 L 0.000 10.000';
const circle = new Path()
    .moveTo(50,1)
    .arc(0,99,25)
    .arc(0,-99,25)
    .close();

export default class TestStar extends Component{
    // 某组件中...
    constructor (props) {
        super(props);
        this.state = {
            animation: new Animated.Value(0),
            animation2: new Animated.Value(0)
        };
        this.infiniteAnimate = this.infiniteAnimate.bind(this);
    }
    componentDidMount () {
        this.infiniteAnimate();
        // this.explode();
    }

    explode = () => {
        Animated.timing(this.state.animation, {
            duration: 1500,
            toValue: 1
        }).start(() => {
            // this.state.animation.setValue(0);
            Animated.timing(this.state.animation2, {
                duration: 1500,
                toValue: 1
            }).start();
            this.forceUpdate();
        });
    }

// 无限循环动画
    infiniteAnimate () {
        Animated.timing(this.state.animation, {
            duration: 1000,
            toValue: 1
        }).start(() => {
            Animated.timing(this.state.animation2, {
                duration: 1500,
                toValue: 1
            }).start(this.infiniteAnimate);
        });
    }
    render () {
        // 不断缩小放大的星星
        return (
            <View>
                <Surface width={300} height={400}>
                    <AnimatedShape
                        d={STAR}
                        x={30}
                        y={30}
                        fill={"#504488"}
                        scale={this.state.animation}
                    />
                    <AnimatedShape
                        d={circle}
                        x={60}
                        y={100}
                        fill={"#886182"}
                        scale={this.state.animation2}
                    />
                </Surface>
            </View>
        );
    }
}
