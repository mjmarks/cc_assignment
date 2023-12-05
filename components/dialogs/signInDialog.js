import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import React from "react";
import { debounce } from "@/logic/utilities/debounce";
import { signIn } from "@/firebase/auth";
import { useRouter } from "next/router";

export default function SignInDialog({ title }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const handleSumbit = async (event) => {
    event.preventDefault();

    const { result } = await signIn(email, password);

    if (result) {
      router.push(`/purchases/${result.user.uid}`);
    }
  };

  return (
    <>
      <Button onPress={onOpen}>Sign In</Button>
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                Please use your ...
              </ModalHeader>
              <ModalBody>
                <form id="signUpForm" onSubmit={handleSumbit}>
                  <Input
                    isRequired
                    label="Email"
                    onChange={(e) => {
                      debounce(setEmail(e.target.value));
                    }}
                    placeholder="fake"
                    type="email"
                  />
                  <div className="font-semibold mt-6 text-black">
                    and the ...
                  </div>
                  <Input
                    className="mt-6"
                    isRequired
                    label="Password"
                    onChange={(e) => {
                      debounce(setPassword(e.target.value));
                    }}
                    placeholder="make-believe"
                    type="password"
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" form="signUpForm" type="submit">
                  To Sign In
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
