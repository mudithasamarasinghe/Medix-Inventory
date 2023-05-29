package com.im.inventorysystem.repository;

import com.im.inventorysystem.model.GoodReceivingNote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//<,data type of the primary key>
public interface GoodReceivingNoteRepository extends JpaRepository<GoodReceivingNote,Integer> {
}
