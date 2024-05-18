import { useEffect, useRef } from "react";

// Dropzone components
import Dropzone from "dropzone";

// Dropzone styles
import "dropzone/dist/dropzone.css";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";

// Custom styles for the ATDropzone
import ATDropzoneRoot from "components/ATDropzone/ATDropzoneRoot";

// ALDR Tech Dashboard context
import { useMaterialUIController } from "context";

// Declaring props types for ATDropzone
interface Props {
  options: {
    [key: string | number]: any;
  };
}

function ATDropzone({ options }: Props): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const dropzoneRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    Dropzone.autoDiscover = false;

    function createDropzone() {
      return new Dropzone(dropzoneRef.current, { ...options });
    }

    function removeDropzone() {
      if (Dropzone.instances.length > 0) Dropzone.instances.forEach((dz: any) => dz.destroy());
    }

    createDropzone();

    return () => removeDropzone();
  }, [options]);

  return (
    <ATDropzoneRoot
      action="/file-upload"
      ref={dropzoneRef}
      className="form-control dropzone"
      ownerState={{ darkMode }}
    >
      <ATBox className="fallback" bgColor="transparent">
        <input name="file" type="file" multiple />
      </ATBox>
    </ATDropzoneRoot>
  );
}

export default ATDropzone;
