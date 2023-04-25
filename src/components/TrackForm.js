import React, { useContext } from "react";
import { Input, Button, ListItemInput} from "react-native-elements";
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
    const { state: { name, recording, locations },
        startRecording,
        stopRecording,
        activityName } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    return (
        <>
            <Spacer>
                {/* Try the ListItemInput for creating the input list of activities */}
                {/* <ListItemInput /> */}
                <Input value={name} onChangeText={activityName} placeholder="Enter activity" />
            </Spacer>
            <Spacer>
                {
                    recording
                        ? <Button title="Stop Recording" onPress={stopRecording} />
                        : <Button title="Start Recording" onPress={startRecording} />
                }
            </Spacer>
            <Spacer>
                {
                    !recording && locations.length
                        ? <Button title="Save Recording" onPress={saveTrack} />
                        : null
                }
            </Spacer>
        </>
    )

}

export default TrackForm;