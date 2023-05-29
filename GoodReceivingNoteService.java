package com.im.inventorysystem.service;

import com.im.inventorysystem.model.GoodReceivingNote;

import java.util.List;

public interface GoodReceivingNoteService {
    //save the goods received
    public GoodReceivingNote saveGoodReceivingNote(GoodReceivingNote goodReceivingNote);
    //get the list of goods received
    public List<GoodReceivingNote> getAllGoodReceivingNotes();
}
