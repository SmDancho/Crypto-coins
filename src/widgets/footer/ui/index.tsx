import { Layout } from "antd";
const { Footer } = Layout;


export const FooterComponent = () => {


  return (
  
      <Layout>
        <Footer
          className="flex justify-between"
        >
          <div>Crypto coins</div>
          <div> 2023</div>
        </Footer>
      </Layout>

  );
};
