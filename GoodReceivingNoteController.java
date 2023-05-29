package com.im.inventorysystem.controller;

import com.im.inventorysystem.model.GoodReceivingNote;
import com.im.inventorysystem.service.GoodReceivingNoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//give the response body and the controller at the same time
@RestController
@RequestMapping("/goodReceivingNote")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET,RequestMethod.POST, RequestMethod.OPTIONS})

//inject the GoodReceivingNoteService
public class GoodReceivingNoteController {
    @Autowired
    private GoodReceivingNoteService goodReceivingNoteService;

    @PostMapping("/add")
    public String add(@RequestBody GoodReceivingNote goodReceivingNote){
        goodReceivingNoteService.saveGoodReceivingNote(goodReceivingNote);
        return "New good receiving note is added";
    }

    @GetMapping("/getAll")
                public List<GoodReceivingNote> getAllGoodReceivingNotes(){
            return goodReceivingNoteService.getAllGoodReceivingNotes();
        }
}
