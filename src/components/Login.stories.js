import {screen, userEvent} from "@storybook/test";
import Login from './Login.vue';

export default {
    title: 'Login',
    component: Login,
};

const Template = (args) => ({
        components: { Login },
        setup() {
            return { args };
        },
        template: '<Login v-bind="args" />',
    })

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
export const Primary = Template.bind({})
Primary.play = async () => {
    const passwordInput = screen.getByLabelText('password', {
        selector: 'input'
    })
    const emailInput = screen.getByLabelText('email', {
        selector: 'input'
    })
    const submitBtn = screen.getByRole('button', {
        selector: 'button'
    })

    const checkboxInput = screen.getByTestId('checkbox', {
        selector: 'input'
    })

    await sleep(1000)

    await userEvent.type(emailInput, 'test@x.com', {
        delay: 200
    })

    await sleep(1000)

    await userEvent.type(passwordInput, 'Example', {
        delay: 200
    })

    await sleep(1000)

    await userEvent.click(checkboxInput);


    await sleep(1000)

        await userEvent.click(submitBtn);


}
