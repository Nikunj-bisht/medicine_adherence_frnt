import { API_URL } from '../../repositories/var';
import RNFetchBlob from 'rn-fetch-blob';

const {config} = RNFetchBlob;

const Downloadpdf = async (globalmedId: any) => {
  const date = new Date();

  let downloaddir = RNFetchBlob.fs.dirs.DownloadDir;
  let downloadPath = `${downloaddir}/report_${Math.floor(
    date.getTime() + date.getSeconds() / 2,
  )}.pdf`;
  const options = {
    fileCache: true,
    addAndroidDownloads: {
      useDownloadManager: true, // true will use native manager and be shown on notification bar.
      notification: true,
      path: downloadPath,
      description: 'Downloading your report',
    },
  };
  let generate_pdf_url = `${API_URL}/api/v1/pdf?medId=${globalmedId}`;
  let response = '';

  try {
    await fetch(generate_pdf_url)
      .then(res => res.json())
      .then(async resp => {
        console.log(resp.message);
        await config(options)
          .fetch('GET', `${API_URL}/upload/static/pdf/${resp.message}.pdf`)
          .catch(() => {
            return 'err';
          });
      })
      .catch(() => {
        response = 'err';
        return response;
      });
    return response;
  } catch (err) {
    response = 'err';
    return response;
  }
};

export default Downloadpdf;

  //from here
  // const pdf = useSelector(
  //   state => state.getPdfReducer.pdfList,
  //   );
  //   const{load} = useSelector(state => state.getPdFReducer);
  //   console.log(load,'load');
  //   const [refresh,refeereshstate] = React.useState(false);
  //   const [open, setOpen] = React.useState(false);
  //   const dispatch = useDispatch();
  //   const getPdfRequest = async () => {
  //     let user_id = await AsyncStorage.getItem('user_id');
  //     dispatch(getPdfRequest(user_id));
  //     refeereshstate(false);
  //   };
  //   useEffect(() => {
  //     getPdfRequest();
  //   }, []);
  //till here
