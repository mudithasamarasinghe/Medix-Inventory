package com.im.inventorysystem.service;

import com.im.inventorysystem.model.GoodReceivingNote;
import com.im.inventorysystem.repository.GoodReceivingNoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class GoodReceivingNoteServiceImpl implements GoodReceivingNoteService{
    //inject repository in to the service class
    @Autowired
    private GoodReceivingNoteRepository goodReceivingNoteRepository;

    @Override
    public List<GoodReceivingNote> getAllGoodReceivingNotes() {
        return goodReceivingNoteRepository.findAll();
    }

    @Override
    public GoodReceivingNote saveGoodReceivingNote(GoodReceivingNote goodReceivingNote) {
        return goodReceivingNoteRepository.save(goodReceivingNote);
        }
    }

