import styled, { css } from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import {
  DELETE_PHOTO,
  EDIT_PHOTO,
  GET_PHOTO,
  UPLOAD_PHOTO,
} from "../../api/photoAPI";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";

function UploadPhotoPage({ isUpload }) {
  const navigate = useNavigate();
  const { pid } = useParams();
  const user = useSelector((state) => state.user.user);
  const { mutate: upload } = useMutation(UPLOAD_PHOTO);
  const { mutate: edit } = useMutation(EDIT_PHOTO);
  const { mutate: del } = useMutation(DELETE_PHOTO);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();
  const { data } = useQuery(["get_photo", pid], () => GET_PHOTO(pid), {
    onSuccess: (data) => {
      reset({
        // set default form value
        title: data.data.info?.title,
        description: data.data.info?.description,
        date: moment(data.data.info?.date).format("yyyy-MM-DD"),
        photo: data.data.info?.img,
      });
    },
  });
  const onFormSubmit = () => {
    const { photo, title, date, description } = getValues();
    const data = {
      photo,
      title,
      date,
      description,
    };

    if (isUpload) {
      // upload photo
      upload(data, {
        onSuccess: (res) => {
          if (res.data.registerPhotoSuccess) {
            navigate(`/${user.id}`);
          }
        },
      });
    } else {
      // edit photo
      edit(
        { pid, data },
        {
          onSuccess: (res) => {
            console.log(res);
            if (res.data.editPhotoInfoSuccess) {
              navigate(-1);
            }
          },
        }
      );
    }
  };

  const onDeleteClick = () => {
    del(pid, {
      onSuccess: (res) => {
        if (res.data.deletePhotoSuccess) {
          navigate(-1);
        }
      },
    });
  };
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <PhotoFormContainer>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div style={{ fontSize: "30px" }}>
            {isUpload ? <>사진 등록하기</> : <>사진 수정하기</>}
          </div>
          <UploadFormInputs>
            <label htmlFor="photo">
              <UploadPhotoInput>
                <IoIosAddCircleOutline size={50} />
              </UploadPhotoInput>
            </label>
            <input
              type="file"
              id="photo"
              accept="image/png, image/jpeg"
              style={{ display: "none" }}
              {...register("photo", {
                // required: "Photo is required",
              })}
            />
            <UploadInfoInput>
              <FormLabel htmlFor="title">제목</FormLabel>
              <TitleInput
                type="text"
                id="title"
                {...register("title", {
                  required: "Title is required",
                })}
                isError={errors.title}
              />
              <FormLabel htmlFor="date">날짜</FormLabel>
              <DateInput
                type="date"
                id="date"
                {...register("date")}
              ></DateInput>
              <FormLabel htmlFor="description">설명</FormLabel>
              <DescriptionInput
                type="text"
                id="description"
                {...register("description")}
              />
            </UploadInfoInput>
          </UploadFormInputs>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "right" }}
          >
            {!isUpload && (
              <PhotoDeleteBtn onClick={handleSubmit(onDeleteClick)}>
                사진 삭제
              </PhotoDeleteBtn>
            )}
            <FormSubmitBtn>
              {isUpload ? <>등록하기</> : <>수정하기</>}
            </FormSubmitBtn>
          </div>
        </form>
      </PhotoFormContainer>
    </div>
  );
}
export default UploadPhotoPage;

const PhotoFormContainer = styled.div`
  margin-top: 20px;
  width: 1000px;
`;

const UploadForm = styled.form``;
const UploadFormInputs = styled.div`
  display: flex;
  margin-top: 20px;
`;
const UploadPhotoInput = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: #f2f6f9;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: gray;
    cursor: pointer;
  }
`;
const UploadInfoInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  font-size: 20px;
  flex-grow: 1;
`;
const FormLabel = styled.label``;
const TitleInput = styled.input`
  margin-top: 10px;
  background-color: #f2f6f9;
  padding: 10px;
  border: none;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  font-family: "Noto Sans KR", sans-serif;
  ${(props) =>
    props.isError &&
    css`
      border: 1px solid ${(props) => props.theme.colors.error};
    `}
  margin-bottom:10px;
`;
const DescriptionInput = styled.textarea`
  margin-top: 10px;
  background-color: #f2f6f9;
  padding: 10px;
  border: none;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  resize: none;
  flex-grow: 1;
  font-family: "Noto Sans KR", sans-serif;
`;
const DateInput = styled.input`
  background-color: #f2f6f9;
  border: none;
  &:focus {
    outline: none;
  }
  padding: 5px;
  margin-top: 10px;
  font-family: "Noto Sans KR", sans-serif;
  margin-bottom: 10px;
  width: 30%;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  height: 40px;
  border-radius: 7px;
  border: none;
  margin-top: 20px;
  margin-left: 10px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
  color: white;
`;
const FormSubmitBtn = styled(Button)`
  background-color: ${(props) => props.theme.colors.point};
`;
const PhotoDeleteBtn = styled(Button)`
  background-color: ${(props) => props.theme.colors.error};
`;
