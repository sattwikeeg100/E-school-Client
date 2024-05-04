import { Button, Heading, Text } from "components";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const seachQuery = useSearchParams()[0];
  const referenceNum = seachQuery.get("reference");
  return (
    <div className="flex flex-col items-center justify-center bg-cream py-8">
      <img
        src="https://cdn.dribbble.com/users/1801739/screenshots/14927640/media/123ed6cff14339d458c9223bd547b0fc.png?resize=800x600&vertical=center"
        alt="Your Image"
        className="max-w-full mb-4"
      />
      <Heading size="xl" as="h4">
        Order Successfull
      </Heading>
      <Text as="p" className="!leading-[30px]">
        Reference No. {referenceNum}
      </Text>
      <Button className="w-full font-medium">
        <Link to="/mylearning">Go to your Courses</Link>
      </Button>
    </div>
  );
};

export default PaymentSuccess;
