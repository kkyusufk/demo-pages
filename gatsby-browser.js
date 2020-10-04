const React = require("react")
const { AnimationWrapper } = require("./src/components/animationWrapper")

exports.wrapPageElement = ({ element }) => {
  console.log(element)
  return (
    <AnimationWrapper>
      {element}
    </AnimationWrapper>
  )
}
