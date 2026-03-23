# Chess CNN Engine (Human-like, supervised on GM PGNs)

See the repo files for:
- `scripts/pgn_to_jsonl.py` dataset builder
- `chessnn/` model + training + play

Quickstart:
```bash
pip install -r requirements.txt
python scripts/pgn_to_jsonl.py --pgn data/gm.pgn --out data/gm.jsonl --min_elo 2400 --augment_mirror
python -m chessnn.train --data data/gm.jsonl --out runs/gm_resnet.pt --epochs 3 --batch_size 256 --use_value_head
python -m chessnn.play  --ckpt runs/gm_resnet.pt --temperature 0.8 --topk 12
```
