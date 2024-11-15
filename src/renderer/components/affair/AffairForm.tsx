//src\renderer\components\affair\AffairForm.tsx
import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input, VStack, HStack, Text } from '@chakra-ui/react';
import { labels } from '../../arabic.labels';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import { AppDispatch, RootState } from '../../redux/store';
import { createAffair, fetchAffairById, switchToUpdateMode, switchToCreateMode, updateAffair } from '../../redux/affair/affairSlice';
import { useNavigate, useParams } from 'react-router-dom';
import AlfaSpinner from '../../shared/AlfaSpinner';
import GenericLookupDialog, { Entity } from '../../shared/GenericLookupDialog';


interface affairState {
    affairId?: number;
    affairNumber: string;
    title: string;
    claimant: string;
    startDateOfWork: string;
    endDateOfWork: string;
    professionalCategoryAtBeginning: string;
    professionalDegreeAtBeginning: string | number;
    sectorialJointAgreement: { sectorialJointAgreementId: string, name: string };
    mode: 'create' | 'update';
}

const initialAffair: affairState = {
    affairId: undefined,
    affairNumber: '',
    title: '',
    claimant: '',
    startDateOfWork: '',
    endDateOfWork: '',
    professionalCategoryAtBeginning: '',
    professionalDegreeAtBeginning: '',
    sectorialJointAgreement: { sectorialJointAgreementId: '', name: '' },
    mode: 'create',
};

const AffairForm: React.FC = () => {
    const navigate = useNavigate();
    const { affairId } = useParams<{ affairId: string }>();
    const dispatch: AppDispatch = useAppDispatch();
    const affairStatus = useAppSelector((state: RootState) => state.affairs.status);
    const currentAffair = useAppSelector((state: RootState) => state.affairs.currentAffair);
    const error = useAppSelector((state: RootState) => state.affairs.error);
    const mode = useAppSelector((state: RootState) => state.affairs.mode);
    const [isLookupOpen, setIsLookupOpen] = useState(false); // Dialog state
    const [agreementsForLookup, setAgreementsForLookup] = useState<Entity[]>([]); // Agreements for lookup
    const [newAffair, setNewAffair] = useState<affairState>(initialAffair);



    useEffect(() => {
        if (affairId) {
            dispatch(switchToUpdateMode());
            dispatch(fetchAffairById(affairId));
        } else {
            dispatch(switchToCreateMode());
        }
    }, [affairId, dispatch]);

    // useEffect(() => {
    //     dispatch(fetchAgreements()).then((agreements) => {
    //         setAgreementsForLookup(mapAgreementsToEntity(agreements["payload"]));
    //     })
    // }, []);




    useEffect(() => {
        if (currentAffair && mode === 'update') {
            setNewAffair({
                ...currentAffair,
                sectorialJointAgreement: {
                    sectorialJointAgreementId: currentAffair.agreement.sectorialJointAgreementId ? currentAffair.agreement.sectorialJointAgreementId.toString() : '',
                    name: currentAffair.agreement.agreementName
                },

            })
        }
    }, [currentAffair, mode]);

    useEffect(() => {
        if (mode === 'create') {
            setNewAffair(initialAffair);
        }
    }, [mode]);

    const handleAgreementSelect = (agreement: Entity) => {
        setNewAffair((prev) => ({
            ...prev,
            sectorialJointAgreement: { sectorialJointAgreementId: agreement.id.toString(), name: agreement.label },
        }));
    };

    const handleCreate = () => {
        const affairDTO = {
            affairNumber: newAffair.affairNumber,
            title: newAffair.title,
            claimant: newAffair.claimant,
            startDateOfWork: newAffair.startDateOfWork,
            endDateOfWork: newAffair.endDateOfWork,
            professionalCategoryAtBegining: newAffair.professionalCategoryAtBeginning,
            professionalDegreeAtBegining: newAffair.professionalDegreeAtBeginning,
            agreement: newAffair.sectorialJointAgreement.sectorialJointAgreementId
        }


        if (isAffairValid(newAffair) && mode === 'create') {
            dispatch(createAffair(affairDTO))
                .then(() => navigate('/affairs'));
        }
    };

    const handleUpdate = () => {
        if (currentAffair && isAffairValid(newAffair)) {
            const updatedAffairDTO = {
                affairId: currentAffair.affairId,
                affairNumber: newAffair.affairNumber,
                title: newAffair.title,
                claimant: newAffair.claimant,
                startDateOfWork: newAffair.startDateOfWork,
                endDateOfWork: newAffair.endDateOfWork,
                professionalCategoryAtBegining: newAffair.professionalCategoryAtBeginning,
                professionalDegreeAtBegining: newAffair.professionalDegreeAtBeginning,
                agreement: newAffair.sectorialJointAgreement.sectorialJointAgreementId,
            };
            dispatch(updateAffair(updatedAffairDTO))
                .then(() => navigate('/affairs'));
        }
    };

    return (
        <Box p={5} m={5} bgColor={'gray.100'} borderRadius={5}>
            {affairStatus === 'loading' && <AlfaSpinner />}
            {error && <Text colorScheme='red'>Error: {error}</Text>}
            <VStack spacing={4}>
                <Heading>{mode === 'update' ? labels.update : labels.create} {labels.affair}</Heading>
                <FormControl>
                    {mode === 'update' && <FormLabel>#{currentAffair?.affairId}</FormLabel>}
                    <FormLabel>{labels.affairTitle}</FormLabel>
                    <Input
                        value={newAffair.title}
                        onChange={(e) => setNewAffair((prev) => ({ ...prev, title: e.target.value }))}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>{labels.affairNumber}</FormLabel>
                    <Input
                        type="text"
                        value={newAffair.affairNumber}
                        onChange={(e) => setNewAffair((prev) => ({ ...prev, affairNumber: e.target.value }))}
                        required
                        placeholder={labels.affairNumber}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>{labels.claimant}</FormLabel>
                    <Input
                        value={newAffair.claimant}
                        onChange={(e) => setNewAffair((prev) => ({ ...prev, claimant: e.target.value }))}
                        required
                        placeholder={labels.claimant}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>{labels.affair}</FormLabel>
                    <HStack>
                        <Input
                            type="text"
                            value={newAffair.sectorialJointAgreement.name}
                            placeholder={labels.affair}
                            readOnly
                        />
                        <Button onClick={() => {
                            setIsLookupOpen(true)
                        }}>{labels.affair}</Button>
                    </HStack>
                </FormControl>
                {/* Lookup Dialog */}
                <GenericLookupDialog
                    isOpen={isLookupOpen}
                    onClose={() => setIsLookupOpen(false)}
                    entities={agreementsForLookup}
                    onSelect={handleAgreementSelect}
                    title={labels.affairTitle}
                />
                <FormControl>
                    <FormLabel>{labels.affairTitle}</FormLabel>
                    <Input
                        type="date"
                        value={newAffair.startDateOfWork}
                        onChange={(e) => setNewAffair((prev) => ({ ...prev, startDateOfWork: e.target.value }))}
                        required
                        placeholder={labels.affairTitle}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>{labels.affairTitle}</FormLabel>
                    <Input
                        type="date"
                        value={newAffair.endDateOfWork}
                        onChange={(e) => setNewAffair((prev) => ({ ...prev, endDateOfWork: e.target.value }))}
                        required
                        placeholder={labels.affairTitle}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>{labels.affairTitle}</FormLabel>
                    <Input

                        value={newAffair.professionalCategoryAtBeginning}
                        onChange={(e) => setNewAffair((prev) => ({ ...prev, professionalCategoryAtBeginning: e.target.value }))}
                        required
                        placeholder={labels.affairTitle}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>{labels.affairTitle}</FormLabel>
                    <Input
                        type="number"
                        value={newAffair.professionalDegreeAtBeginning}
                        onChange={(e) => setNewAffair((prev) => ({ ...prev, professionalDegreeAtBeginning: e.target.value }))}
                        required
                        placeholder={labels.affairTitle}
                    />
                </FormControl>


            </VStack>
            <HStack spacing={4} mt={4} justifyContent='flex-end' p={4}>
                <Button onClick={mode === 'update' ? handleUpdate : handleCreate} colorScheme='blue' shadow='md' isDisabled={!isAffairValid(newAffair)}>
                    {mode === 'update' ? labels.update : labels.save}
                </Button>
            </HStack>
        </Box>
    );
};

export default AffairForm;

function isAffairValid(_affair: affairState): boolean {
    return !!(_affair &&
        _affair.title.trim() &&
        _affair.affairNumber.trim() &&
        _affair.claimant.trim() &&
        _affair.sectorialJointAgreement.sectorialJointAgreementId.trim() &&
        _affair.startDateOfWork.trim() &&
        _affair.endDateOfWork.trim() &&
        _affair.professionalCategoryAtBeginning.trim() &&
        (typeof (_affair.professionalDegreeAtBeginning) === 'number' ||
            typeof (_affair.professionalDegreeAtBeginning) === "string"
            && _affair.professionalDegreeAtBeginning.trim())
    );
}
function mapAgreementsToEntity(agreements: any) {
    return agreements.map((agreement: any) => ({ id: agreement.sectorialJointAgreementId, label: agreement.agreementName }))
}

