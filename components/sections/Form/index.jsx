import styled from "styled-components";

const Subscribe = () => {
    // Res:
    // Hey ya! Great to see you here. Btw, nothing is configured for this request path. Create a rule and start building a mock API.

    return (
        <Section>
            <Text>
                <h2>Financial Tech trends straight to your inbox</h2>
                <h4>
                    Sign up for trends, reports and papers on everything finance
                    and tech in the banking world
                </h4>
            </Text>
            <Form
                action="https://under2.free.beeceptor.com/submit"
                method="post"
            >
                <Field>
                    <Label>First Name</Label>
                    <label htmlFor="firstName">
                        <Input type="text" id="firstName" />
                    </label>
                </Field>
                <Field>
                    <Label>Last Name</Label>
                    <label htmlFor="lastName">
                        <Input type="text" id="lastName" />
                    </label>
                </Field>
                <Field>
                    <Label>E-mail</Label>
                    <label htmlFor="email">
                        <Input type="email" id="email" />
                    </label>
                </Field>
                <Field>
                    <Label>Company</Label>
                    <label htmlFor="company">
                        <Input type="text" id="company" />
                    </label>
                </Field>

                <Submit type="submit">Subscribe</Submit>
            </Form>
        </Section>
    );
};

export default Subscribe;

const Section = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0px auto;
    padding: 80px 0px;
    background: hsla(0, 0%, 95%, 1);

    display: flex;
    flex-wrap: wrap;
`;

const Text = styled.div`
    flex: 1 1 250px;
    padding: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
        font-size: 1.8em;
        line-height: 1em;
        // text-align: center;
        max-width: 350px;
        margin: 20px;
    }
    h4 {
        font-size: 0.8em;
        max-width: 350px;
        margin: 0px 20px;
        color: hsla(0, 0%, 50%, 1);
    }
`;

const Form = styled.form`
    position: relative;
    flex: 1 1 250px;
    padding-bottom: 40px;

    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const Field = styled.div`
    margin: 0px auto;
    width: 50%;
    min-width: 200px;
`;

const Input = styled.input`
    border: 1px solid hsla(0, 0%, 90%, 1);
    height: 30px;
    transition: 0.5s;

    :focus {
    }
`;

const Label = styled.div`
    color: hsla(0, 0%, 30%, 1);
    font-size: 12px;
    margin: 6px 0px;
`;

const Submit = styled.button`
    position: absolute;
    bottom: 0px;
    left: 20px;
    width: 130px;
    height: 40px;
    margin: -10px 25%;

    border-radius: 3px;
    background-color: hsla(224, 77%, 48%, 1);
    border: none;
    color: white;
`;
