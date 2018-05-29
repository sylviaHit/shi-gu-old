
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
const STAR = 'M 0.000 10.000 L 11.756 16.180 L 9.511 3.090 L 19.021 -6.180 L 5.878 -8.090 L 0.000 -20.000 L -5.878 -8.090 L -19.021 -6.180 L -9.511 3.090 L -11.756 16.180 L 0.000 10.000'


export default class TestStar extends Component{
    // 某组件中...
    constructor (props) {
        super(props);
        this.state = {
            // 设定Animated.Value初值
            value: new Animated.Value(0)
        }
        this.infiniteAnimate = this.infiniteAnimate.bind(this);
    }
    componentDidMount () {
        this.infiniteAnimate();
    }
// 无限循环动画
    infiniteAnimate () {
        Animated.timing(this.state.value, {
            duration: 1000,
            toValue: 1
        }).start(() => {
            Animated.timing(this.state.value, {
                duration: 2000,
                toValue: 0
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
                        fill={"#280"}
                        scale={this.state.value}
                    />
                </Surface>
            </View>
        );
    }
}