import { useState } from "react";

// @asseinfo/react-kanban components
import Board from "@asseinfo/react-kanban";

// html-react-parser
import parse from "html-react-parser";

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// @mui material components
import Icon from "@mui/material/Icon";
import { Theme } from "@mui/material/styles";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATButton from "components/ATButton";
import ATTypography from "components/ATTypography";
import ATInput from "components/ATInput";

//  ALDR Tech Dashboard examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Kanban application components
import Header from "layouts/applications/kanban/components/Header";

// Data
import boards from "layouts/applications/kanban/data";

// ALDR Tech Dashboard context
import { useMaterialUIController } from "context";

function Kanban(): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [newCardForm, setNewCardForm] = useState<string | number | boolean>(false);
  const [formValue, setFormValue] = useState<string>("");

  const openNewCardForm = (event: HTMLButtonElement | any, id: string | number) =>
    setNewCardForm(id);
  const closeNewCardForm = () => setNewCardForm(false);
  const handeSetFormValue = ({ currentTarget }: any) => setFormValue(currentTarget.value);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ATBox py={3}>
        <ATBox display="flex" justifyContent="flex-end" m={2}>
          <Header />
        </ATBox>
        <ATBox
          position="relative"
          my={4}
          sx={({
            palette: { light, background },
            functions: { pxToRem },
            borders: { borderRadius },
          }: Theme | any) => ({
            "& .react-kanban-column": {
              backgroundColor: darkMode ? background.card : light.main,
              width: pxToRem(450),
              margin: `0 ${pxToRem(10)}`,
              padding: pxToRem(20),
              borderRadius: borderRadius.lg,
            },
          })}
        >
          <Board
            initialBoard={boards}
            allowAddCard
            allowAddColumn
            renderColumnHeader={({ id, title }: any, { addCard }: any) => (
              <>
                <ATBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <ATTypography variant="h6">{title}</ATTypography>
                  <ATButton size="small" iconOnly onClick={(event) => openNewCardForm(event, id)}>
                    <Icon
                      sx={{
                        fontWeight: "bold",
                        color: ({ palette: { dark } }) => dark.main,
                      }}
                    >
                      add
                    </Icon>
                  </ATButton>
                </ATBox>
                {newCardForm === id ? (
                  <ATBox my={2.5}>
                    <ATInput
                      value={formValue}
                      rows="4"
                      onChange={handeSetFormValue}
                      multiline
                      fullWidth
                    />
                    <ATBox display="flex" mt={2}>
                      <ATButton
                        variant="gradient"
                        color="success"
                        size="small"
                        onClick={() => {
                          addCard({ id: uuidv4(), template: formValue });
                          setFormValue("");
                        }}
                      >
                        add
                      </ATButton>
                      <ATBox ml={1}>
                        <ATButton
                          variant="gradient"
                          color="light"
                          size="small"
                          onClick={closeNewCardForm}
                        >
                          cancel
                        </ATButton>
                      </ATBox>
                    </ATBox>
                  </ATBox>
                ) : null}
              </>
            )}
            renderCard={({ id, template }: any, { dragging }: any) => (
              <ATBox
                key={id}
                dragging={dragging.toString() || undefined}
                display="block"
                width="calc(450px - 40px)"
                bgColor={darkMode ? "transparent" : "white"}
                color="text"
                borderRadius="xl"
                mt={2.5}
                py={1.875}
                px={1.875}
                lineHeight={1.5}
                sx={{
                  border: ({ borders: { borderWidth }, palette: { white } }: any) =>
                    darkMode ? `${borderWidth[1]} solid ${white.main}` : 0,
                  fontSize: ({ typography: { size } }: any) => size.md,
                }}
              >
                {typeof template === "string" ? parse(template) : template}
              </ATBox>
            )}
            onCardNew={(): any => null}
          />
        </ATBox>
      </ATBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Kanban;
